const app     = require('../index');
const assert  = require('chai').assert;
const request = require('supertest-as-promised');

const subscribeKey     = '',
      publishKey       = '';
      message          = JSON.stringify({text: 'Hello World'}),
      channels         = "ch1, ch2";
      uuid             = "1234"

describe('PubNub API', () => {
    it('/publishMessageb', function() {
      this.timeout(10000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/publishMessage`)
        .send({args:{subscribeKey, publishKey, message}})
        .expect(200)
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/hereNow', function() {
      this.timeout(10000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/hereNow`)
        .send({args:{subscribeKey, channels}})
        .expect(200)
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/whereNow', function() {
      this.timeout(10000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/whereNow`)
        .send({args:{subscribeKey, uuid}})
        .expect(200)
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/getUserState', function() {
      this.timeout(10000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getUserState`)
        .send({args:{subscribeKey, uuid, channels}})
        .expect(200)
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });
});
