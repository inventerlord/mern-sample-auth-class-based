import { initializeApp, credential as _credential } from 'firebase-admin';
import serviceAccount from '../pavf-10c83-firebase-adminsdk-6idm2-86efbc68e4.json';
const firebaseAdmin = initializeApp({
  credential: _credential.cert(serviceAccount),
});
export default firebaseAdmin;
