import { randomUUID } from "crypto";
import { Users } from "../database/users";
// import { likes } from "../database/likes";
import { Like } from "./like";
import { Console } from "console";
import { allTweets } from "../database/allTweets";


export class Tweets {
    private tweetId: string;
    private replies: string[] = [];
     likes: string[] = [];


    constructor(public userId: string, public content: string, public type: string) {
        this.tweetId = randomUUID()
        allTweets.push(this)



    }

    get _tweetId(): string {
        return this.tweetId
    }

    get _userId(){
        return this.userId
    }

    reply(userId: string, content: string) {
        this.replies.push(content)

        return console.log(`Reply sucess`)
    }

    showTweet() {
        return console.log(`${this.content}`)
    }

    showReply() {
        return console.log(`${this.reply}`)

    }

    // like(userId: string) {

    //     const like = new Like(userId, this.tweetId)
    //      likes.filter(like => like.tweetId === this.tweetId).length
    //      return console.log(`O usuario ${userId} e mais ${likes.length} curtiram seu tweet.`)

    // }

    like(userId: string) {
        this.likes.push(userId);
        return console.log('like sucess')
    }






}