export default function  createAuthUser ({id, username, email}){

    return {
        id,
        userName: username,
        userHandle: username,
        userAvatarPath: '2',
        email,
        userBio: 'perfectly balanced.',
        meta:{
            link: "https://github.com/rishabh-gurbani",
            linkAbbr: 'github/rishabh-gurbani',
            joined: 'June 2017',
        },
        followers: 118,
        following: 217,
    };
}