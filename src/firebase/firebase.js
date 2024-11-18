// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAPNumoWL9mTyNLpXIZSFWZSsF7BjJL6cQ',
    authDomain: 'react-next-shop-app-8826a.firebaseapp.com',
    projectId: 'react-next-shop-app-8826a',
    storageBucket: 'react-next-shop-app-8826a.firebasestorage.app',
    messagingSenderId: '892259563128',
    appId: '1:892259563128:web:b48c721f13467188881f8d',
}

// Initialize Firebase
// console.log(firebase.initializeApp)
export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)

export const storage = getStorage(app)

export default app
