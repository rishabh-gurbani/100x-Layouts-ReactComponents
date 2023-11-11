import { useState } from 'react';

import TweetActionButtons from './TweetActionButtons'
import UserAvatar from "../UserAvatar"
import tweetPropTypes from "./TweetPropTypes"
import formattedTimeStamp from "../../utils/FormattedTimeStamp"

export default function TweetComponent ({tweet}) {

    const author = tweet.user;
    
    const [ likes, setLikes ] = useState(tweet.likes);
    const [ isLiked, setIsLiked ] = useState(tweet.isLiked);

    const [ retweets, setRetweets ] = useState(tweet.retweets);
    const [ isRetweeted, setIsRetweeted ] = useState(tweet.isRetweeted);

    const { comments, views } = tweet;
    const stats = {
        likes,
        isLiked, 
        comments, 
        retweets,
        isRetweeted, 
        views,
    }

    const likeHandler = () => {
        setLikes(likes + ( isLiked ? -1 : 1 ));
        setIsLiked(!isLiked);
    }

    const retweetHandler = () => {
        setRetweets(retweets + (isRetweeted ? -1 : 1));
        setIsRetweeted(!isRetweeted);
    }

    return (
        <article className="flex text-neutral-50 border-b border-neutral-700 w-full px-4 py-2 bg-black round">
            {/* User Icon */}
            <div className="mt-1 flex-shrink-0">
                <UserAvatar user={author.userAvatarPath} size="md" outline={false}/>
            </div>
             
            <div className="ml-4 w-full">
                {/* Tweet Header */}
                <div className="flex p-0">
                    <div className="mr-2 font-semibold">{author.userName}</div>
                    <div className="mr-1 text-neutral-500">{`@${author.userHandle}`}</div>
                    <div className="mr-1 text-neutral-500">•</div>
                    <div className="mr-1 text-neutral-500">{formattedTimeStamp(tweet.timestamp)}</div>
                </div>
                {/* Tweet Content */}
                <p className="text-15 mb-2" style={{ whiteSpace: "pre-line" }}>
                    {tweet.tweetContent}
                </p>
                {/* Action Buttons */}
                <TweetActionButtons stats={stats} handlers={[likeHandler, retweetHandler]}/>
            </div>

        </article>
    )
}

TweetComponent.propTypes = {tweet: tweetPropTypes}
