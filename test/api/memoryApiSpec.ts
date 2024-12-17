import frisby from 'frisby';
import { expect } from '@jest/globals';
import config from 'config';
import path from 'path';
import fs from 'fs';

// FILE: test/api/memoryApiSpec.test.ts


const jsonHeader = { 'content-type': 'application/json' };
const REST_URL = 'http://localhost:3000/rest';

// Helper function for creating form data
function createFormData(filePath: string): any {
  const form = frisby.formData();
  form.append('image', fs.createReadStream(filePath), 'Valid Image');
  form.append('caption', 'Valid Image');
  return form;
}

// Helper function for user login
function loginUser(email: string, password: string) {
  return frisby.post(REST_URL + '/user/login', {
    headers: jsonHeader,
    body: { email, password }
  }).expect('status', 200);
}

// Helper function to generate Authorization headers
function getAuthHeaders(token: string, contentType: string = 'application/json') {
  return { Authorization: 'Bearer ' + token, 'Content-Type': contentType };
}

describe('/rest/memories', () => {
  it('GET memories via public API', () => {
    return frisby.get(REST_URL + '/memories')
      .expect('status', 200);
  });

  it('GET memories via a valid authorization token', () => {
    return loginUser('jim@' + config.get<string>('application.domain'), 'ncc-1701')
      .then(({ json: jsonLogin }) => {
        return frisby.get(REST_URL + '/memories', {
          headers: getAuthHeaders(jsonLogin.authentication.token)
        })
          .expect('status', 200);
      });
  });

  it('POST new memory is forbidden via public API', () => {
    const file = path.resolve(__dirname, '../files/validProfileImage.jpg');
    const form = createFormData(file);

    return frisby.post(REST_URL + '/memories', {
      headers: {
        'Content-Type': form.getHeaders()['content-type']
      },
      body: form
    })
      .expect('status', 401);
  });

  it('POST new memory image file invalid type', () => {
    const file = path.resolve(__dirname, '../files/invalidProfileImageType.docx');
    const form = createFormData(file);

    return loginUser('jim@' + config.get<string>('application.domain'), 'ncc-1701')
      .then(({ json: jsonLogin }) => {
        return frisby.post(REST_URL + '/memories', {
          headers: {
            ...getAuthHeaders(jsonLogin.authentication.token),
            'Content-Type': form.getHeaders()['content-type']
          },
          body: form
        })
          .expect('status', 500);
      });
  });

  it('POST new memory with valid for JPG format image', () => {
    const file = path.resolve(__dirname, '../files/validProfileImage.jpg');
    const form = createFormData(file);

    return loginUser('jim@' + config.get<string>('application.domain'), 'ncc-1701')
      .then(({ json: jsonLogin }) => {
        return frisby.post(REST_URL + '/memories', {
          headers: {
            ...getAuthHeaders(jsonLogin.authentication.token),
            'Content-Type': form.getHeaders()['content-type']
          },
          body: form
        })
          .expect('status', 200)
          .then(({ json }) => {
            expect(json.data.caption).toBe('Valid Image');
            expect(json.data.UserId).toBe(2);
          });
      });
  });

  it('Should not crash the node-js server when sending invalid content like described in CVE-2022-24434', () => {
    return frisby.post(REST_URL + '/memories', {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryoo6vortfDzBsDiro',
        'Content-Length': '145'
      },
      body: '------WebKitFormBoundaryoo6vortfDzBsDiro\r\n Content-Disposition: form-data; name="bildbeschreibung"\r\n\r\n\r\n------WebKitFormBoundaryoo6vortfDzBsDiro--'
    })
      .expect('status', 500)
      .expect('bodyContains', 'Error: Malformed part header');
  });
});