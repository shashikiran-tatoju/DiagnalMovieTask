import { combineReducers } from "redux";

const FIRST_PAGE = {
  page: {
    title: "Romantic Comedy",
    "total-content-items": "54",
    "page-num-requested": "1",
    "page-size-requested": "20",
    "page-size-returned": "20",
    "content-items": {
      content: [
        {
          name: "The Birds",
          "poster-image": "poster1.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster3.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster3.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster3.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster1.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster3.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster3.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster3.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster1.jpg",
        },
      ],
    },
  },
};
const SECOND_PAGE = {
  page: {
    title: "Romantic Comedy",
    "total-content-items": "54",
    "page-num-requested": "2",
    "page-size-requested": "20",
    "page-size-returned": "20",
    "content-items": {
      content: [
        {
          name: "Rear Window",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster6.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster4.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster6.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster6.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster4.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster4.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster6.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster4.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster6.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster6.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster5.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster4.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster4.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster5.jpg",
        },
      ],
    },
  },
};
const THIRD_PAGE = {
  page: {
    title: "Romantic Comedy",
    "total-content-items": "54",
    "page-num-requested": "3",
    "page-size-requested": "20",
    "page-size-returned": "14",
    "content-items": {
      content: [
        {
          name: "Family Pot",
          "poster-image": "poster9.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster8.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster7.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster9.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster9.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster8.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster7.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster9.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster8.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster7.jpg",
        },
        {
          name: "The Birds with an Extra Long Title",
          "poster-image": "poster9.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster9.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster8.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "posterthatismissing.jpg",
        },
      ],
    },
  },
};
const ALL_MOVIES = [
  ...FIRST_PAGE.page["content-items"].content,
  ...SECOND_PAGE.page["content-items"].content,
  ...THIRD_PAGE.page["content-items"].content,
];

const INITIAL_STATES = {
  search: "",
  data: FIRST_PAGE.page["content-items"].content,
};

const moviesReducer = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case "READ":
      if (action.payload == 1) {
        const { search, data } = state;
        let result = FIRST_PAGE.page["content-items"].content;

        if (search != null && search.length > 0) {
          result = result.filter((object, index) => {
            if (object.name.toLowerCase().indexOf(search.toLowerCase()) != -1) {
              return true;
            } else {
              return false;
            }
          });
        }
        return { search: search, data: result };
      } else if (action.payload == 2) {
        const { search, data } = state;

        let result = [
          ...FIRST_PAGE.page["content-items"].content,
          ...SECOND_PAGE.page["content-items"].content,
        ];
        if (search != null && search.length > 0) {
          result = result.filter((object, index) => {
            if (object.name.toLowerCase().indexOf(search.toLowerCase()) != -1) {
              return true;
            } else {
              return false;
            }
          });
        }
        return { search: search, data: result };
      } else {
        const { search, data } = state;
        let result = [
          ...FIRST_PAGE.page["content-items"].content,
          ...SECOND_PAGE.page["content-items"].content,
          ...THIRD_PAGE.page["content-items"].content,
        ];
        if (search != null && search.length > 0) {
          result = result.filter((object, index) => {
            if (object.name.toLowerCase().indexOf(search.toLowerCase()) != -1) {
              return true;
            } else {
              return false;
            }
          });
        }
        return { search: search, data: result };
      }
    case "SEARCH":
      const text = action.payload;
      let result = ALL_MOVIES;
      if (text != null && text.length > 0) {
        result = result.filter((object, index) => {
          if (object.name.toLowerCase().indexOf(text.toLowerCase()) != -1) {
            return true;
          } else {
            return false;
          }
        });
      }

      return { search: text, data: result };
    default:
      console.log("I ma in default");
      return INITIAL_STATES;
  }
};

export default combineReducers({
  movies: moviesReducer,
});
