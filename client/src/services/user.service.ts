import { browserSessionPersistence, GoogleAuthProvider, setPersistence, signInWithRedirect, UserCredential } from "firebase/auth"
import { auth } from "../helpers/fiebase";

export const signInWithGoogle = () => (
  new Promise<UserCredential>((resolve, reject) => {
    setPersistence(auth, browserSessionPersistence)
    .then(() => {
      const provider = new GoogleAuthProvider();
      resolve(signInWithRedirect(auth, provider));
    });
  })
)