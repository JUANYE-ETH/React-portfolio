import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyCfe_NEpe-kBjchVxDapyIkjAg146qpFuw',
  authDomain: 'react-portfolio-dashboar-3b5b3.firebaseapp.com',
  projectId: 'react-portfolio-dashboar-3b5b3',
  storageBucket: 'react-portfolio-dashboar-3b5b3.appspot.com',
  messagingSenderId: '1031230618101',
  appId: '1:1031230618101:web:6d70b3f8f3d7dc3ce108bc',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
