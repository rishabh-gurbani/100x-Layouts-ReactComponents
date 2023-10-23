import TweetComponent from "./TweetComponent"

export default function Timeline ({tweets}){

    const tweetComponents = tweets.map(tweet => <TweetComponent key={tweet.id} tweet={tweet}/>)

    return (
        <main>
            <section>
                {tweetComponents}
            </section>
        </main>
    )
}
