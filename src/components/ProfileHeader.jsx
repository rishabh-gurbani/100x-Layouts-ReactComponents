import CoverImage from "../assets/images/cover.png"
import UserAvatar from "../components/UserAvatar"
import LinkIcon from "../assets/images/calendar-icon.svg"
import CalendarIcon from "../assets/images/link-icon.svg"

export default function ProfileHeader ({user}) {

    const userLink = user.meta.link ? 
        <div className="flex gap-1 w-full">
            <img src={LinkIcon} />
            <a href={user.meta.link} className="text-twitter-blue">{user.meta.linkAbbr}</a>
        </div> : <></>

    const userJoined = user.meta.joined ? 
        <div className="flex gap-1 w-full">
            <img src={CalendarIcon} />
            <span className="text-neutral-500">Joined {user.meta.joined}</span>
        </div> : <></>

    return (
        <header>
            <div className="relative mb-2">
                <img src={CoverImage} className="w-full" />
                <div className="absolute -bottom-9.5 left-5">
                    <UserAvatar user={user.userAvatarPath} size="xxl" outline="true"/>
                </div>
            </div>
            <section className="px-4 pb-3 border-b border-neutral-700 mb-2">
                <div className="flex justify-end mb-1">
                    <a href="./UserProfileEdit.html">
                    <button className="py-2 px-5 w-32 h-9 border border-1 border-sign-up-border
                        font-bold text-center flex justify-center items-center rounded-full
                        ">
                        Edit profile
                    </button>
                    </a>
                </div>
                <div className="flex flex-col items-start mb-4">
                    <h1 className="text-xl font-bold mb-1">{user.userName}</h1>
                    <h2 className="text-15 text-neutral-500">@{user.userHandle}</h2>
                </div>
                <p className="mb-4">
                    {user.userBio}
                </p>
                <div className="flex gap-4 text-sm max-[420px]:flex-wrap max-[420px]:gap-2 max-w-[400px]">
                    {userLink}
                    {userJoined}
                </div>
                <div className="mt-4 flex gap-4">
                    <div className="flex gap-1">
                    <span>{user.following}</span>
                    <span className="text-neutral-500">Following</span>
                    </div>
                    <div className="flex gap-1">
                    <span>{user.followers}</span>
                    <span className="text-neutral-500">Followers</span>
                    </div>
                </div>
            </section>
    </header>
    )
}
