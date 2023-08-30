import { configureStore } from "redux";
import rootReducer from "./rootReducer";

const store = configureStore(rootReducer);

export default store;
