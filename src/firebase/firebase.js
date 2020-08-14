import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAo-3D0df7VasK_Btw-Ny-2L61WlVQkhh8',
  authDomain: 'e-commerce-updated-b9692.firebaseapp.com',
  databaseURL: 'https://e-commerce-updated-b9692.firebaseio.com',
  projectId: 'e-commerce-updated-b9692',
  storageBucket: 'e-commerce-updated-b9692.appspot.com',
  messagingSenderId: '172789210830',
  appId: '1:172789210830:web:59e35c8fff6a577ed4fa9f',
  measurementId: 'G-TRFW3WPKNP'
};

firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
export default firebase;
