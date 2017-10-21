import * as firebase from 'firebase';

export default function ($firebaseAuth, $state, $firebaseArray) {
  'ngInject';

  const auth = $firebaseAuth(firebase.auth());
  let loggedUser = null;

  return {
    firebaseAuth() {
      return $firebaseAuth(firebase.auth());
    },

    register(user) {
      return auth.$createUserWithEmailAndPassword(user.email, user.password).then(function (newUser) {

        let ref = firebase.database().ref("users").child(newUser.uid);
        let userObj = {
          "fName": user.fName,
          "sName": user.sName,
          "email": user.email
        };

        ref.set(userObj);
      }, function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
      });
    },

    login(user) {
      return auth.$signInWithEmailAndPassword(user.email, user.password).then(function (cb) {
        let ref = firebase.database().ref("users");
        let users = $firebaseArray(ref);
        return users.$loaded().then(() => {
          loggedUser = users.$getRecord(cb.uid);
        });

      });
    },

    logout() {
      auth.$signOut().then(function () {
        loggedUser = null;
        $state.go("app.loggedOut");
      }).catch(function (error) {
        console.log(error);
      });
    },

    sendWelcomeEmail(emailAddress) {
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    },

    isLoggedIn() {
      return this.getUser();
    },

    getUser() {
      if (loggedUser == null) {
        loggedUser = auth.$getAuth();
      }

      return loggedUser;
    }

  }
}
