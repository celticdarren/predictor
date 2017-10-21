import * as firebase from 'firebase';

export default function ($firebaseAuth, $state, $firebaseArray) {
  'ngInject';
  const auth = $firebaseAuth(firebase.auth());
  let fixtures = null;

  return {
    getFixtures(week) {
      if (fixtures == null) {
        let teams = firebase.database()
          .ref("fixtures/week"+week+"/teams");
        let score = firebase.database()
          .ref("fixtures/week"+week+"/score");
        score = $firebaseArray(score);
        teams = $firebaseArray(teams);

        fixtures = {
          score: score,
          teams: teams
        };
      }
      return fixtures;
    },
    getUsersScores(uid, week) {

    },
    postUsersScores(uid, week, scores) {

    }

  }
}
