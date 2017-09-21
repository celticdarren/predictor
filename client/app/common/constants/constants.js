const constants = {
  fixtures: [
    {
      home: {
        team: "Czech Republic",
        score: 1
      },
      away: {
        team: "Germany",
        score: 2
      }
    }, {
      home: {
        team: "Lithuania",
        score: 0
      },
      away: {
        team: "Scotland",
        score: 3
      }
    }, {
      home: {
        team: "Malta",
        score: 0
      },
      away: {
        team: "England",
        score: 4
      }
    }
  ],
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