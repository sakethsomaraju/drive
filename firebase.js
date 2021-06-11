const admin = require('firebase-admin');

const serviceAccount = require('./private_keys')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://my-drive-9a874.appspot.com'
});

const bucket = admin.storage().bucket();

module.exports = bucket