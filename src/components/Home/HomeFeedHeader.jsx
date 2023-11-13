import Logo from "../../assets/images/logo.svg"
import UserAvatar from "../../components/UserAvatar"

function HomeFeedHeader () {
    return (
        <header className="h-15 px-4 flex items-center justify-between border-b border-neutral-700 flex-shrink-0 relative">
            <a href="#" className="absolute">
                <UserAvatar user='2' outline={false}/>
            </a>
            <div className="flex-grow flex justify-center items-center">
                <img src={Logo} className="w-12" />
            </div>
        </header>
    )
}

export default HomeFeedHeader
