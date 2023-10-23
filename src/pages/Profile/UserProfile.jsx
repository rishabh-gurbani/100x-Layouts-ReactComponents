import ProfileHeader from "../../components/ProfileHeader"
import Timeline from "../../components/Timeline"

export default function UserProfile() {

    const user = {
        userName: 'Rishabh Gurbani',
        userHandle: 'rishabh-gurbani',
        userAvatarPath: '2',
        userBio: 'perfectly balanced.',
        meta:{
            link: "https://github.com/rishabh-gurbani",
            linkAbbr: 'github/rishabh-gurbani',
            joined: 'June 2017',
        },
        followers: 118,
        following: 217,
    }

    const tweets = [
        {
            id: 83492,
            user: user,
            timestamp: '32mins',
            tweetContent: "Don't wish for it, work for it.",
            likes: 270,
            comments: 11,
            retweets: 1869, 
            views: '99.6k',
        },
    
        {
            id: 21765,
            user: user,
            timestamp: '10h',
            tweetContent: "i've seen people absolutely despise auto layout in figma but I think it's a lifesaver-\n\n1. tidies everything nice and compact\n2. makes responsive design effortless\n3. no manual adjustments post any tweaks\n4. saves a tonnn of time\n\nsorry, but will stay an auto layout maxi all life.",
            likes: 270,
            comments: 11,
            retweets: 1869, 
            views: '99.6k',
        },
    
        {
            id: 54981,
            user: user,
            timestamp: '10h',
            tweetContent: " Writing gets easier after the first sentence.\n\nLifting gets easier after the first set.\n\nPeople think and think and think until they finally decide to act. Their attention shifts from internal to external, and the difficulty they created in their mind vanishes.",
            likes: 270,
            comments: 11,
            retweets: 1869, 
            views: '99.6k',
        },
    
        {
            id: 37645,
            user: user,
            timestamp: '10h',
            tweetContent: "i've seen people absolutely despise auto layout in figma but I think it's a lifesaver-\n\n1. tidies everything nice and compact\n2. makes responsive design effortless\n3. no manual adjustments post any tweaks\n4. saves a tonnn of time\n\nsorry, but will stay an auto layout maxi all life.",
            likes: 270,
            comments: 11,
            retweets: 1869, 
            views: '99.6k',
        },
    
        {
            id: 92013,
            user: user,
            timestamp: '10h',
            tweetContent: "i've seen people absolutely despise auto layout in figma but I think it's a lifesaver-\n\n1. tidies everything nice and compact\n2. makes responsive design effortless\n3. no manual adjustments post any tweaks\n4. saves a tonnn of time\n\nsorry, but will stay an auto layout maxi all life.",
            likes: 270,
            comments: 11,
            retweets: 1869, 
            views: '99.6k',
        },
    
    ]

    return (
    <>
        <div>
            <ProfileHeader user={user}/>
            <Timeline tweets={tweets}/>
        </div>
    </>
    )
}
