import dummyAuthProvider from "./DummyAuthProvider.js";
import { Map } from 'immutable';

// common auth provider
const authProvider = ({providerName}) => {
    const authProviders = {
        'dummyAuthProvider': dummyAuthProvider,
    }

    let authUser;
    const getAuthUser = () => Map(authUser);

    const provider = authProviders[providerName]();


    return {
        getAuthUser,

    }
}