import Plus from "../assets/images/home-screen/add.svg"

export default function ActionButton (){
    return (
        <a href="../ComposeTweet/ComposeTweet.html" className="mx-3 my-3 fixed bottom-16 right-0 p-4 rounded-full bg-twitter-blue">
            <img src={Plus} />
        </a>
    )
}
