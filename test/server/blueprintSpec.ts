import chai = require('chai')
import config from 'config'
import type { Product as ProductConfig } from 'lib/config.types'

import path from 'path'
import { promisify } from 'util'
import { ExifImage } from 'exif'
import sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)
const fs = require('fs')
const utils = require('../../lib/utils')
const { pipeline } = require('stream')
const fetch = require('node-fetch')

async function parseExifData (path: string): Promise<any> {
  return await new Promise((resolve, reject) => {
    // eslint-disable-next-line no-new
    new ExifImage({ image: path }, (error: Error | null, exifData: unknown) => {
      if (error != null) {
        expect.fail(`Could not read EXIF data from ${path}`)
        reject(error)
      }
      resolve(exifData)
    })
  })
}

describe('blueprint', () => {
  const products = config.get<ProductConfig[]>('products')
  let pathToImage: string = 'assets/public/images/products/'

  describe('checkExifData', () => {
    it('should contain properties from exifForBlueprintChallenge', async () => {
      for (const product of products) {
        if (product.fileForRetrieveBlueprintChallenge && product.image) {
          if (utils.isUrl(product.image)) {
            pathToImage = path.resolve('frontend/dist/frontend', pathToImage, product.image.substring(product.image.lastIndexOf('/') + 1))
            const streamPipeline = promisify(pipeline)
            const response = await fetch(product.image)
            if (!response.ok) expect.fail(`Could not download image from ${product.image}`)
            await streamPipeline(response.body, fs.createWriteStream(pathToImage))
          } else {
            pathToImage = path.resolve('frontend/src', pathToImage, product.image)
          }

          if (product.exifForBlueprintChallenge?.[0]) { // Prevents failing test for sample or custom themes where null has been explicitly set as value for "exifForBlueprintChallenge". Warning: This makes the "Retrieve Blueprint" challenge probably unsolvable unless hints are placed elsewhere.
            try {
              const exifData = await parseExifData(pathToImage)
              const properties = Object.values(exifData.image)
              for (const property of product.exifForBlueprintChallenge) {
                expect(properties).to.include(property)
              }
            } catch (error) {
              expect.fail(`Could not read EXIF data from ${pathToImage}`)
            }
          }
        }
      }
    })
  })
})
