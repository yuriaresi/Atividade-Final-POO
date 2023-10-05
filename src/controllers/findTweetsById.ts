import { allTweets } from "../database/allTweets";

export function findTweetById(tweetId: string): void {
    const foundTweet = allTweets.filter((tweet) => tweet._tweetId === tweetId)
    if (foundTweet.length === 0) {
        return console.log("No tweet found")
    }
    console.log(foundTweet)

}
