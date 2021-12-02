import { all } from "redux-saga/effects";
import { appSaga } from "../modules/app";
import { userSaga } from "../modules/user";
import {dashboardSaga} from '../modules/dashboard';

const sagas = [
  appSaga(),
  userSaga(),
  dashboardSaga(),
];

export default function*() {
  yield all(sagas);
}
