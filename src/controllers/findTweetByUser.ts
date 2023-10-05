import { allTweets } from "../database/allTweets";
import { Users } from "../database/users";

export function findTweetByUser(usersId: string): void {
    const foundTweet = allTweets.filter((tweet) => tweet._userId === usersId)
    if (foundTweet.length === 0) {
        return console.log("No tweet found")
    }
    console.log(foundTweet)

}


