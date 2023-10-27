import Heart from "../../assets/images/tweet-actions/heart.svg"
import Comment from "../../assets/images/tweet-actions/comment.svg"
import Retweet from "../../assets/images/tweet-actions/rt.svg"
import Share from "../../assets/images/tweet-actions/share.svg"
import Stats from "../../assets/images/tweet-actions/stats.svg"


export default function TweetActionButtons () {
    return (
        <div className="flex w-full justify-between my-4">
            <button className="flex items-center gap-1">
                <img src={Comment} className="w-3.5 h-auto" />
                <div className="text-sm text-neutral-500">11</div>
            </button>
                
            <button className="flex items-center gap-1">
                <img src={Retweet} className="w-4 h-auto" />
                <div className="text-sm text-neutral-500">270</div>
            </button>
            
            <button className="flex items-center gap-1">
                <img src={Heart} className="w-3.5 h-auto" />
                <div className="text-sm text-neutral-500">1,869</div>
            </button>
            
            <button className="flex items-center gap-1">
                <img src={Stats} className="w-3.5 h-auto" />
                <div className="mt-0.5 text-sm self-end text-neutral-500">99.6k</div>
            </button>
            
            <button className="flex items-center gap-1">
                <img src={Share} className="w-3.5 h-auto" />
            </button>
        </div>
    )
}
