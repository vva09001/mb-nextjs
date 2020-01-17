import actions from "./actions";
import { takeLatest, put, all, fork } from "redux-saga/effects";
import { getPageService } from "../../services/home";

function* homeSaga() {
  yield takeLatest(actions.GET_HOME_REQUEST, function*(params) {
    console.log("123");
    try {
      const res = yield getPageService("homepage");
      if (res.status === 200) {
        yield put({ type: actions.GET_HOME_RESPONSE, data: res.data });
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(homeSaga)]);
}
