import * as firebase from 'firebase';

export default function ($firebaseAuth, $state, $firebaseArray) {
  'ngInject';
  const auth = $firebaseAuth(firebase.auth());
  let fixtures = {};

  return {
    getFixtures(week) {
      debugger;
      fixtures = $firebaseArray(firebase.database().ref(`fixtures/week${week}`));
      return fixtures;
    },
    getUsersScores(uid, week) {

    },
    postUsersScores(uid, week, scores) {

    }

  }
}
