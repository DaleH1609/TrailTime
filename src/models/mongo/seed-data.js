export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "$2a$10$HnapEWWKQQ0.0Ft33nXxtuJ0fsmd9ywYswEzT4C.6Ul5y6cOU.UEa"
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "$2a$10$D3TWK8MSAh63Lhk4gIFSJ.ekM368J88qJRUYSbuBfzffex6B0dFwK"
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "$2a$10$uqnPlgyVjBEOtcgMhn/WRO3FwW4T9gX36tTB4RqpGeB/LkCR3YQuO"
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
