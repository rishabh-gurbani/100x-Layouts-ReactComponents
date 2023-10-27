import Logo from "../../assets/images/logo.svg"
import UserAvatar from "../../components/UserAvatar"
import ActionButton from "../../components/ActionButton"
import HomeIcon from "../../assets/images/home-screen/home-icon.svg"
import ProfileIcon from "../../assets/images/home-screen/profile.svg"
import RoundedSnackBar from "../../components/RoundedSnackBar"
import Timeline from "../../components/Timeline"
import TabNavigator from "../../components/Home/TabsNavigator"


function HomeFeedHeader () {
    return (
        <header className="py-3 px-4 flex items-center justify-between border-b border-neutral-700 flex-shrink-0">
            <a href="#" >
                <UserAvatar user='2' outline={false}/>
            </a>
            <span className="flex-grow flex justify-center items-center">
                <img src={Logo} className="w-11" />
            </span>
        </header>
    )
}

function HomeFeedFooter () {
    return (
        <footer className="fixed bottom-0 py-4 px-6 bg-black w-full border-t border-neutral-800 flex-shrink-0 mt-4">
            <nav>
            <ul className="flex justify-center gap-10">
                <li>
                <a href="#">
                    <button>
                    <img src={HomeIcon} />
                    </button>
                </a>
                </li>
                <li>
                <a href="../UserProfile/UserProfile.html">
                    <button>
                    <img src={ProfileIcon} className="p-1" />
                    </button>
                </a>
                </li>
            </ul>
            </nav>
        </footer>
    )
}

export default function Home() {

    const tweets = [
        {
            id: 83492,
            user: {
                userName: 'Name',
                userHandle: 'handle',
                userAvatarPath: '1',
            },
            timestamp: '32mins',
            tweetContent: "Don't wish for it, work for it.",
            likes: 270,
            comments: 11,
            retweets: 1869, 
            views: '99.6k',
        },
    
        {
            id: 21765,
            user: {
                userName: 'Name',
                userHandle: 'handle',
                userAvatarPath: '3',
            },
            timestamp: '10h',
            tweetContent: "i've seen people absolutely despise auto layout in figma but I think it's a lifesaver-\n\n1. tidies everything nice and compact\n2. makes responsive design effortless\n3. no manual adjustments post any tweaks\n4. saves a tonnn of time\n\nsorry, but will stay an auto layout maxi all life.",
            likes: 270,
            comments: 11,
            retweets: 1869, 
            views: '99.6k',
        },
    
        {
            id: 54981,
            user: {
                userName: 'Name',
                userHandle: 'handle',
                userAvatarPath: '1',
            },
            timestamp: '10h',
            tweetContent: " Writing gets easier after the first sentence.\n\nLifting gets easier after the first set.\n\nPeople think and think and think until they finally decide to act. Their attention shifts from internal to external, and the difficulty they created in their mind vanishes.",
            likes: 270,
            comments: 11,
            retweets: 1869, 
            views: '99.6k',
        },
    
        {
            id: 37645,
            user: {
                userName: 'Name',
                userHandle: 'handle',
                userAvatarPath: '2',
            },
            timestamp: '10h',
            tweetContent: "i've seen people absolutely despise auto layout in figma but I think it's a lifesaver-\n\n1. tidies everything nice and compact\n2. makes responsive design effortless\n3. no manual adjustments post any tweaks\n4. saves a tonnn of time\n\nsorry, but will stay an auto layout maxi all life.",
            likes: 270,
            comments: 11,
            retweets: 1869, 
            views: '99.6k',
        },
    
        {
            id: 92013,
            user: {
                userName: 'Name',
                userHandle: 'handle',
                userAvatarPath: '3',
            },
            timestamp: '10h',
            tweetContent: "i've seen people absolutely despise auto layout in figma but I think it's a lifesaver-\n\n1. tidies everything nice and compact\n2. makes responsive design effortless\n3. no manual adjustments post any tweaks\n4. saves a tonnn of time\n\nsorry, but will stay an auto layout maxi all life.",
            likes: 270,
            comments: 11,
            retweets: 1869, 
            views: '99.6k',
        },
    
    ]

    const tabs = ['For You', 'Following'];
    
    return (
        <div className='flex flex-col'>
            <HomeFeedHeader />
            <TabNavigator tabs={tabs} activeTab={0}/>
            <div className="pb-16">
                <Timeline tweets={tweets}/>
            </div>
            <RoundedSnackBar text="Copied to clipboard"/>
            <ActionButton />
            <HomeFeedFooter />
        </div>
    )
}
