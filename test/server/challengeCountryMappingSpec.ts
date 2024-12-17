import { test_helper_1, test_helper_2 } from './utils/test_helpers';

test_helper_1(); // Replaced with helper function

test_helper_46(); // Replaced with helper function

test_helper_47(); // Replaced with helper function

test_helper_48(); // Replaced with helper function

describe('challengeCountryMapping', () => {
  let challenges: any
  let countryMapping: Record<string, { code: any }>
  before(async () => {
    challenges = await loadYamlFile(path.resolve('data/static/challenges.yml'))
    countryMapping = (await loadYamlFile(path.resolve('config/fbctf.yml'))).ctf.countryMapping
  })
  it('should have a country mapping for every challenge', async () => {
    for (const { key } of challenges) {
      expect(countryMapping, `Challenge '${key}' does not have a country mapping.`).to.have.property(key)
    }
  })

  it('should have unique country codes in every mapping', async () => {
    const countryCodeCounts: any = {}

    for (const key of Object.keys(countryMapping)) {
      const { code } = countryMapping[key]

      if (!Object.prototype.hasOwnProperty.call(countryCodeCounts, code)) {
        countryCodeCounts[code] = 0
      }
      countryCodeCounts[code]++
    }

    for (const key of Object.keys(countryCodeCounts)) {
      const count = countryCodeCounts[key]

      expect(count, `Country '${key}' is used for multiple country mappings.`).to.equal(1)
    }
  })
})
