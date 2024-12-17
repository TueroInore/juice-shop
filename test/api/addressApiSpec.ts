import * as Helpers from './utils/test_helpers';
import { Helpers.test_helper_1, Helpers.test_helper_2 } from './utils/test_helpers';

Helpers.test_helper_1(); // Replaced with helper function

Helpers.test_helper_11(); // Replaced with helper function

Helpers.test_helper_12(); // Replaced with helper function

const jsonHeader = { 'content-type': 'application/json' }
let authHeader: { Authorization: string, 'content-type': string }
let addressId: string

Helpers.test_helper_13(); // Replaced with helper function

describe('/api/Addresss', () => {
  it('GET all addresses is forbidden via public API', () => {
    return frisby.get(API_URL + '/Addresss')
      .expect('status', 401)
  })

  it('GET all addresses', () => {
    return frisby.get(API_URL + '/Addresss', { headers: authHeader })
      .expect('status', 200)
  })

  it('POST new address with all valid fields', () => {
    return frisby.post(API_URL + '/Addresss', {
      headers: authHeader,
      body: {
        fullName: 'Jim',
        mobileNum: '9800000000',
        zipCode: 'NX 101',
        streetAddress: 'Bakers Street',
        city: 'NYC',
        state: 'NY',
        country: 'USA'
      }
    })
      .expect('status', 201)
  })

  it('POST new address with invalid pin code', () => {
    return frisby.post(API_URL + '/Addresss', {
      headers: authHeader,
      body: {
        fullName: 'Jim',
        mobileNum: '9800000000',
        zipCode: 'NX 10111111',
        streetAddress: 'Bakers Street',
        city: 'NYC',
        state: 'NY',
        country: 'USA'
      }
    })
      .expect('status', 400)
  })

  it('POST new address with invalid mobile number', () => {
    return frisby.post(API_URL + '/Addresss', {
      headers: authHeader,
      body: {
        fullName: 'Jim',
        mobileNum: '10000000000',
        zipCode: 'NX 101',
        streetAddress: 'Bakers Street',
        city: 'NYC',
        state: 'NY',
        country: 'USA'
      }
    })
      .expect('status', 400)
  })

  it('POST new address is forbidden via public API', () => {
    return frisby.post(API_URL + '/Addresss', {
      fullName: 'Jim',
      mobileNum: '9800000000',
      zipCode: 'NX 10111111',
      streetAddress: 'Bakers Street',
      city: 'NYC',
      state: 'NY',
      country: 'USA'
    })
      .expect('status', 401)
  })
})

describe('/api/Addresss/:id', () => {
  beforeAll(() => {
    return frisby.post(API_URL + '/Addresss', {
      headers: authHeader,
      body: {
        fullName: 'Jim',
        mobileNum: '9800000000',
        zipCode: 'NX 101',
        streetAddress: 'Bakers Street',
        city: 'NYC',
        state: 'NY',
        country: 'USA'
      }
    })
      .expect('status', 201)
      .then(({ json }) => {
        addressId = json.data.id
      })
  })

  it('GET address by id is forbidden via public API', () => {
    return frisby.get(API_URL + '/Addresss/' + addressId)
      .expect('status', 401)
  })

  it('PUT update address is forbidden via public API', () => {
    return frisby.put(API_URL + '/Addresss/' + addressId, {
      quantity: 2
    }, { json: true })
      .expect('status', 401)
  })

  it('DELETE address by id is forbidden via public API', () => {
    return frisby.del(API_URL + '/Addresss/' + addressId)
      .expect('status', 401)
  })

  it('GET address by id', () => {
    return frisby.get(API_URL + '/Addresss/' + addressId, { headers: authHeader })
      .expect('status', 200)
  })

  it('PUT update address by id', () => {
    return frisby.put(API_URL + '/Addresss/' + addressId, {
      headers: authHeader,
      body: {
        fullName: 'Jimy'
      }
    }, { json: true })
      .expect('status', 200)
      .expect('json', 'data', { fullName: 'Jimy' })
  })

  it('PUT update address by id with invalid mobile number is forbidden', () => {
    return frisby.put(API_URL + '/Addresss/' + addressId, {
      headers: authHeader,
      body: {
        mobileNum: '10000000000'
      }
    }, { json: true })
      .expect('status', 400)
  })

  it('PUT update address by id with invalid pin code is forbidden', () => {
    return frisby.put(API_URL + '/Addresss/' + addressId, {
      headers: authHeader,
      body: {
        zipCode: 'NX 10111111'
      }
    }, { json: true })
      .expect('status', 400)
  })

  it('DELETE address by id', () => {
    return frisby.del(API_URL + '/Addresss/' + addressId, { headers: authHeader })
      .expect('status', 200)
  })
})
