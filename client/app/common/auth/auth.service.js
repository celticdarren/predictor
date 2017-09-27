import * as firebase from 'firebase';

export default function ($firebaseAuth, $state) {
  'ngInject';

  const auth = $firebaseAuth(firebase.auth());

  return {
    firebaseAuth() {
        return $firebaseAuth(firebase.auth());
    },

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
      auth.$signOut().then(function () {
        console.log("Logged out");
        return true;
      }).catch(function (error) {
        console.log(error);
      });
    },

    sendWelcomeEmail(emailAddress) {
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    },

    isLoggedIn(isAuthNeeded = false) {
      auth.$onAuthStateChanged(function(firebaseUser) {
        if (isAuthNeeded && !firebaseUser) {
          $state.go("app.login");
        } else if(isAuthNeeded) {
          console.log(`Signed in as: ${firebaseUser.uid}`);
        }
      });
    },

    getUser() {
      var firebaseUser =auth.$getAuth();

      if (firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
      } else {
        console.log("Signed out");
      }
    }

  }
}
