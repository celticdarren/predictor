import * as firebase from 'firebase';

export default function ($firebaseAuth, $state) {
  'ngInject';

  const auth = $firebaseAuth(firebase.auth());
  this.user = null;

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
        this.$state.go("app.loggedOut");
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
      let firebaseUser = auth.$getAuth();

      if (firebaseUser) {
        console.log(firebaseUser);
      } else {
        console.log("No user")
      }

      return firebaseUser;
    }

  }
}
