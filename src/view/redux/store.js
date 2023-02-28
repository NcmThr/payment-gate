import { createStore } from "redux";
import cardReducer from "./page/page.reducer";

const store = createStore(cardReducer);

export default store;
