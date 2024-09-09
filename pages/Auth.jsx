import { useEffect, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app, googleAuthProvider } from "../firebase";


export default function Auth() {
    const auth = getAuth(app);
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
       const unSub = auth.onAuthStateChanged((maybeUser) => {
            if (maybeUser != null) {
                return setUser(maybeUser);
            }

            signInWithPopup(auth, googleAuthProvider)
                .then((credentials) => setUser(credentials.user))
                .catch((e) => console.error(e))
        });
        return unSub;
    }, [auth]);

    return user != null ? <>{ userAgent.displayName }</> : <>loading..</>;
}
