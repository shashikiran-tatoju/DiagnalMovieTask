import { createStore } from "redux";

import MoviesReducer from "./MoviesReducer";

const store = createStore(MoviesReducer);

export default store;
