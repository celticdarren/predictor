const constants = {
  fixtures: {
    week1: {
      teams: {
        home: "team",
        away: "team"
      },
      score: {
        home: null,
        away: null
      }
    },
    week2: {
      teams: {
        home: "team",
        away: "team"
      },
      score: {
        home: null,
        away: null
      }
    }

  },
  multipliers: {
    team: 1,
    score: 4
  },
  facts: [
    {
      title: "Fact one",
      description: "Some random fact that I can’t think of yet so I’ll just bs until something cool happens."
    }, {
      title: "Fact two",
      description: "Still can’t think of any facts about us… maybe something will come to me in fact three."
    }, {
      title: "Fact three",
      description: "Nope. Still nothing. It’s just not happening. Sorry…but no really."
    }
  ],
  howToPlay: [
    {
      order: 0,
      title: "Step one",
      description: "Log in to your profile - or register if this is your first time"
    }, {
      order: 1,
      title: "Step two",
      description: "Enter your scores in the boxes for each fixture. You will be scored on the correct team and correct score"
    }, {
      order: 2,
      title: "Step three",
      description: "Once you are happy, click submit. Remember, there is no going back!"
    }, {
      order: 3,
      title: "Step four",
      description: "Await the results. Scores are updated daily so you can keep up-to-date with who is winning"
    }
  ]
};

export default constants;