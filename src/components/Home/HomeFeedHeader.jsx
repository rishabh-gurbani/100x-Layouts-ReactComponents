import Logo from "../../assets/images/logo.svg"
import UserAvatar from "../../components/UserAvatar"

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

export default HomeFeedHeader
