import TweetActionButtons from '../components/TweetActionButtons'
import UserAvatar from "../components/UserAvatar"

export default function TweetComponent ({tweet}) {

    const author = tweet.user

    return (
        <article className="flex text-neutral-50 border-b border-neutral-700 w-full px-4 py-2 bg-black round">
            {/* User Icon */}
            <div className="mt-1 flex-shrink-0">
                <UserAvatar user={author.userAvatarPath} size="md"/>
            </div>
             
            <div className="ml-4 w-full">
                {/* Tweet Header */}
                <div className="flex p-0">
                    <div className="mr-2 font-semibold">{author.userName}</div>
                    <div className="mr-1 text-neutral-500">{`@${author.userHandle}`}</div>
                    <div className="mr-1 text-neutral-500">•</div>
                    <div className="mr-1 text-neutral-500">{tweet.timestamp}</div>
                </div>
                {/* Tweet Content */}
                <p className="text-15 mb-2" style={{ whiteSpace: "pre-line" }}>
                    {tweet.tweetContent}
                </p>
                {/* Action Buttons */}
                <TweetActionButtons/>
            </div>

        </article>
    )
}
