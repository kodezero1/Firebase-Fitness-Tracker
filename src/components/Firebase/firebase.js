import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAB7z9n9R9RoECPr9EW39hytP2pkAnWqCI",
  authDomain: "workout-tracker-801dc.firebaseapp.com",
  databaseURL: "https://workout-tracker-801dc-default-rtdb.firebaseio.com",
  projectId: "workout-tracker-801dc",
  storageBucket: "workout-tracker-801dc.appspot.com",
  messagingSenderId: "358962789249",
  appId: "1:358962789249:web:819e0ed3801c729c008680",
  measurementId: "G-FK2ECTEMXW"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
    
    /*** Authentication  ***/
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => 
        this.auth.signOut();

    doPasswordReset = email => 
        this.auth.sendPasswordResetEmail(email);
    
    /*** Database ***/
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

    addActivity = (uid, activity) => {
        const ref = this.db.ref().child(`users/${uid}/activities`);
        ref.push(activity);
    };

    updateActivity = (uid, activity, activityKey) => {
        const ref = this.db.ref().child(`users/${uid}/activities/${activityKey}`);
        ref.update(activity);
    }
}

export default Firebase;