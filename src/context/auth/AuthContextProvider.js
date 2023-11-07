import { useState } from "react";
import PropTypes from "prop-types";
import AuthContext from "./AuthContext.js";

const AuthContextProvider = ({children}) => {
    const [authState, setAuthState] = useState(null);
    return(
        <AuthContext.Provider value={[authState, setAuthState]}>
            {children}
        </AuthContext.Provider>
    )
}

AuthContextProvider.propTypes = {
    children: PropTypes.func,
}

export { AuthContextProvider };
