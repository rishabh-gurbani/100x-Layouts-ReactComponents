import dummyAuthProvider from "./DummyAuthProvider.js";

// common auth provider interface. can make use of any provider (firebase, oAuth etc)
const authService = ({providerName}) => {

    const authProviders = {
        'dummyAuthProvider': dummyAuthProvider,
        'oAuthProvider' : null,
    }
    const provider = authProviders[providerName]();

    const getAuthUser = async () =>
        await provider.getAuthUser();

    const login = async ({email, password}) =>
        await provider.login({email, password});

    const register = async ({email, password}) =>
        await provider.register({email, password});

    const sendVerificationCode = async () =>
        await provider.sendVerificationCode();

    const verifyCode = async ({code}) =>
        await provider.verifyCode({code});

    const logOut = async () =>
        await provider.logOut();

    return {
        getAuthUser,
        login,
        register,
        sendVerificationCode,
        verifyCode,
        logOut,
    }

}