/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import admin from 'firebase-admin';

import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
      }),
    });
  } catch (error) {
    console.error('Firebase admin initialization error', (error as any).stack);
  }
}

export default admin.firestore();
