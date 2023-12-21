import { initializeApp, credential as _credential } from 'firebase-admin';
import serviceAccount from '../config/firebase.json';
const firebaseAdmin = initializeApp({
  credential: _credential.cert(serviceAccount),
});
export default firebaseAdmin;
