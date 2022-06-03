

var admin = require("firebase-admin");

var serviceAccount = require("../firebaseKey.json");

const {getFirestore}  = require('firebase-admin/firestore')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore()

module.exports = {
    db,
}