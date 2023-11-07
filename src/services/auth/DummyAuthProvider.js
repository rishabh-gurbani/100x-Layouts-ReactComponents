import createAuthUser from "./CreateAuthUser.js";

export default function dummyAuthProvider () {

    let AuthUser;
    const getAuthUser = () => AuthUser;

    const login = async ({email, password})=> {
        console.log(email, password);
        await delay(2000);
    }

    const register = async ({username, email, password}) => {
        console.log(username, email, password);
        await delay(2000);
        // send request to register
        // try { } catch { }
        const randomUserID = Math.random()*1000;
        AuthUser = createAuthUser({randomUserID,username, email});
        return AuthUser;
    }

    let verificationCode; // only for demo

    const sendVerificationCode = async () => {
        await delay(2000);
        // server sends verification code
        verificationCode = Math.random()*1000;
        console.log(verificationCode);
    }

    const verifyCode = async ({code}) => {
        await delay(2000);
        return code === verificationCode;
    }

    const logOut = async () => {
        await delay(2000);
        AuthUser = null;
    }

    return {
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
