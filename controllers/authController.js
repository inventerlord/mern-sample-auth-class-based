import firebaseAdmin from '../modules/firebase_admin';
import { auth } from '../modules/firebase_client';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
// export const register = async (req, res) => {
//   const { email, password } = req.body;

//   firebaseAdmin
//     .auth()
//     .createUser({
//       email: email,
//       password: password,
//       emailVerified: false,
//       disabled: false,
//     })
//     .then((user) => {
//       return res.status(201).json(user);
//     })
//     .catch((error) => {
//       return res.json(error);
//     });
// };
export const register = async (req, res) => {
  const { email, password } = req.body;
  createUserWithEmailAndPassword(auth, email, password)
    .then((registerResponse) => {
      return res.status(201).json(registerResponse);
    })
    .catch((error) => {
      return res.status(401).json(error);
    });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  signInWithEmailAndPassword(auth, email, password)
    .then((loginResponse) => {
      return res.status(200).json(loginResponse);
    })
    .catch((error) => {
      return res.status(401).json(error);
    });
};
