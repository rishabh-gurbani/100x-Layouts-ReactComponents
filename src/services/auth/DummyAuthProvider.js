import createAuthUser from "./CreateAuthUser.js";

export default function dummyAuthProvider () {

    const authToken = localStorage.getItem("token");

    let AuthUser;
    const getAuthUser = () => AuthUser;

    // TODO: Add init function for authService. initialise auth service
    // and get current user from token and other states (user, session, token, etc).

    const init = async () => {
        await delay(1000);
        const token = localStorage.getItem('token');
        // returning dummy user here
        // in reality, will fetch user details from auth token
        if (token) {
            AuthUser = createAuthUser({id: 2345, username: 'rishabh-gurbani', email: 'r@g.com'});
            return AuthUser;
        }
    }

    // creates auth token
    const createAndSetAuthToken = () => {
        let token = 'yoda123yoda567';
        localStorage.setItem('token',token);
    }

    const login = async ({email, password})=> {
        console.log(email, password);
        await delay(2000);

        const isTokenExpired = true;
        if (isTokenExpired) createAndSetAuthToken();

        // get data of user and return user
        // get userID by email and password, get data of user and return
        // returning dummy user here
        const randomUserID = Math.floor(Math.random()*1000);
        AuthUser = createAuthUser({id: randomUserID, username: 'rishabh-gurbani', email});
        return AuthUser;
    }

    const register = async ({username, email, password}) => {
        console.log(username, email, password);
        await delay(2000);
        // send request to register
        // try { } catch { }
        const randomUserID = Math.floor(Math.random()*1000);
        AuthUser = createAuthUser({id: randomUserID, username, email});
        createAndSetAuthToken();
        return AuthUser;
    }

    let verificationCode; // only for demo

    const sendVerificationCode = async () => {
        await delay(2000);
        // server sends a 6 digit verification code
        verificationCode = Math.floor(100000 + Math.random() * 900000);
        console.log(verificationCode);
    }

    const verifyCode = async ({code}) => {
        await delay(2000);
        return code === verificationCode;
    }

    const logOut = async () => {
        await delay(2000);
        localStorage.removeItem('token');
        AuthUser = null;
    }

    return {
        init,
        getAuthUser,
        login,
        register,
        sendVerificationCode,
        verifyCode,
        logOut,
    }
}

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
