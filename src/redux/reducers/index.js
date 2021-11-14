import { combineReducers } from "redux";

import { particularList } from "./particularList";
import { companyList } from "./companyList";
import { userReduce } from "./userReduce";

export default combineReducers({
  particularList,
  companyList,
  userReduce,
});
