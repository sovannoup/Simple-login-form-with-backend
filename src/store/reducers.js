import { routerReducer } from "react-router-redux";
import appReducer from "../modules/app/reducer";
import userReducer from "../modules/user/reducer";
import dashboardReducer from '../modules/dashboard/reducer';

export default {
  app: appReducer,
  user: userReducer,
  router: routerReducer,
  dashboard: dashboardReducer
};
