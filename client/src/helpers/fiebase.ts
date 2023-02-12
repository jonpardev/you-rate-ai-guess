import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_CONFIG } from "../config/env";
import { setUser } from "./slices/userSlice";
import { UserType } from "../types/user.type";
import { store } from "./redux";

const firebaseConfig = JSON.parse(FIREBASE_CONFIG);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

auth.onAuthStateChanged(async (user) => {
  if (user != null) {
    store.dispatch(setUser({
      displayName: user.displayName,
      email: user.email,
      accessToken: await user.getIdToken(),
    } satisfies UserType));
  } else { store.dispatch(setUser(null)); }
})
