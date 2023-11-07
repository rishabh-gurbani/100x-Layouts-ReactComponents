import { useState } from "react";
import AuthContext from "./AuthContext.js";
import PropTypes from "prop-types";

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
