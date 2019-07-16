import { takeLatest, all } from "redux-saga/effects";
import { ExampleTypes } from "App/Stores/User/Actions";
import { StartupTypes } from "App/Stores/Startup/Actions";
import { fetchUser } from "./UserSaga";
import { startup } from "./StartupSaga";

export default function* root() {
  yield all([
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser)
  ]);
}
