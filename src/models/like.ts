import { likes } from "../database/likes";

export class Like {
        constructor(public userId: string, public tweetId: string){
            likes.push(this);
        }
}