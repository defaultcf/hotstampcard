const functions = require('firebase-functions');
const admin = require("firebase-admin");

admin.initializeApp();

exports.validateStamp = functions.firestore
  .document("stamps/{user}/data/{date}")
  .onCreate((snap, context) => {
    snap.ref.set({
      time: new Date(),
      valid: true,
    });
  });
