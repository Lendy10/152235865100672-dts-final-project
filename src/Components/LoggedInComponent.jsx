import { useEffect } from "react";

// CHECK IF USER HAS LOGGED IN
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../Auth/authentication";

export const LoggedInComponent = ({ children }) => {
    const navigate = useNavigate();

    const [user, isLoading] = useAuthState(auth);

    useEffect(() => {
        if (!user) {
            navigate("/register");
            return;
        }
    }, [user, navigate]);

    if (isLoading) {
        return;
    } else {
        return children;
    }
}
