import { randomUUID } from "crypto";
import { Users } from "../database/users";
import { findTweetByUser } from "../controllers/findTweetByUser";
import { allTweets } from "../database/allTweets";


export class User {
    private userId: string

    constructor(public name: string, public username: string, public email: string, private password: string, userId?: string) {
        this.userId = userId || randomUUID();
        Users.push(this)


    }

    sendTweet(userId: string, username: string, email: string) {
        console.log(`User ${username} tweeted!`)
    }

    follow(userId: string) {
        console.log(`Following ${userId}`)
    }

    showFeed() {
        return console.log(this.name, this.username, this.email)
    }

    // showTweets(userId: string) {
    //     const foundTweet = allTweets.filter((tweet) => tweet._userId === userId)
    // if (foundTweet.length === 0) {
    //     return console.log("No tweet found")
    // }
    // console.log(foundTweet)
    // }

    public get id(): string {
        return this.userId;
    }


}

// export function newUser(name: string, username: string, email: string, password: string) {
//     const newUser = new User(name, username, email, password)
//     Users.push(newUser)
//     return console.log(`Usuario criado com sucesso!`)
// }
