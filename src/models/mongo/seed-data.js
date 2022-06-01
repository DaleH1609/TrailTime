export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "secret"
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "secret"
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "secret"
      }
    },
    traillists: {
        _model: "Trail list",
        mozart: {
          title: "Barts Favourites",
          userid: "->users.bart"
        }
      },
      trails: {
        _model : "Trail",
        trail_1 : {
          title: "The Causeway Coast",
          location: "Co Antrim",
          type: "Walking",
          latitude: 5.14,
          longitude: 5.34,
          category: "Easy",
          traillistid: "->traillists.walking"
        },
      }
  };
