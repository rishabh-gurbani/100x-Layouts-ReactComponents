import PropTypes from 'prop-types'

import Heart from "../../assets/images/tweet-actions/heart.svg"
import Comment from "../../assets/images/tweet-actions/comment.svg"
import Retweet from "../../assets/images/tweet-actions/rt.svg"
import Share from "../../assets/images/tweet-actions/share.svg"
import Stats from "../../assets/images/tweet-actions/stats.svg"


export default function TweetActionButtons ({stats, handlers}) {

    const {likes, comments, retweets, views, isLiked, isRetweeted} = stats;

    return (
        <div className="flex w-full justify-between my-4">
            <button className="flex items-center gap-1">
                <img src={Comment} className="w-3.5 h-auto" />
                <div className="text-sm text-neutral-500">{comments}</div>
            </button>
                
            <button className="flex items-center gap-1">
                <img src={Retweet} className="w-4 h-auto" />
                <div className="text-sm text-neutral-500">{retweets}</div>
            </button>
            
            <button className="flex items-center gap-1">
                <img src={Heart} className="w-3.5 h-auto" />
                <div className="text-sm text-neutral-500">{likes}</div>
            </button>
            
            <button className="flex items-center gap-1">
                <img src={Stats} className="w-3.5 h-auto" />
                <div className="mt-0.5 text-sm self-end text-neutral-500">{views}</div>
            </button>
            
            <button className="flex items-center gap-1">
                <img src={Share} className="w-3.5 h-auto" />
            </button>
        </div>
    )
}

TweetActionButtons.propTypes = {
    stats: PropTypes.exact({
        likes: PropTypes.number.isRequired,
        isLiked: PropTypes.bool.isRequired,
        comments: PropTypes.number.isRequired,
        retweets: PropTypes.number.isRequired,
        isRetweeted: PropTypes.bool.isRequired,
        views: PropTypes.string.isRequired,
    }).isRequired,
    handlers: PropTypes.arrayOf(PropTypes.func).isRequired,
}
