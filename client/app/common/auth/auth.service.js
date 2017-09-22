import * as firebase from 'firebase';



export default function ($firebaseAuth, $state) {
  'ngInject';

  const auth = $firebaseAuth(firebase.auth());

  return {
    fbTest() {
      let ref = firebase.database().ref();
      return ref.child('scores').child('lochgreen');
    },

    register(user) {
      return auth.$createUserWithEmailAndPassword(user.email, user.password);
    },

    login(user) {
      return auth.$signInWithEmailAndPassword(user.email, user.password);
    },

    logout() {
      auth.$signOut().then(function() {
        console.log("Logged out");
        return true;
      }).catch(function(error) {
        console.log(error);
      });
    },

    sendWelcomeEmail(emailAddress) {
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    },

    isLoggedIn(isAuthNeeded = false) {
      let userObj = null;
      firebase.auth().onAuthStateChanged((user) => {
        if(isAuthNeeded && !user) {
          $state.go("app.login");
        }
        userObj = user;
      }).then(() => {
        return userObj;
      });
    },

    getUser() {

    }

  }
}
