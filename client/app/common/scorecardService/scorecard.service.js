import * as firebase from 'firebase';

export default function ($firebaseAuth, $state, $firebaseArray) {
  'ngInject';
  const auth = $firebaseAuth(firebase.auth());
  let fixtures = null;

  return {
    getFixtures(week) {
      if(fixtures == null) {
        console.log("got fixtures");
        let ref = firebase.database().ref("fixtures/week1");
        fixtures = $firebaseArray(ref);
      }
      return fixtures;
    },
    getUsersScores(uid, week) {

    },
    postUsersScores(uid, week, scores) {

    }

  }
}
