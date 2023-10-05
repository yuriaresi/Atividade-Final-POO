import { findTweetByUser } from "./controllers/findTweetByUser";
import { findTweetById } from "./controllers/findTweetsById";
import { allTweets } from "./database/allTweets";
import { Users } from "./database/users";
import { Tweets } from "./models/tweets";
import { User } from "./models/users";

const user1 = new User('Julio', 'juliolohan', 'julio@julio', '1234', '')
const user2 = new User('Marcia', 'marciaricaldi', 'marcia@marcia', '123456', 'marciaricaldi')
const user3 = new User('Nicolas', 'nicolasaresi', 'nicolas@nicolas', '1234', 'nicolasaresi')

const tweet1 = new Tweets(Users[0].id, 'testando tweet1', 'principal')
const tweet3 = new Tweets(Users[2].id, 'testando tweet2', 'principal')
const tweet4 = new Tweets(Users[0].id, 'testando tweet3', 'principal')
const tweet5 = new Tweets(Users[1].id, 'testando tweet4', 'principal')


console.log(Users)

findTweetById(allTweets[0]._tweetId)

findTweetByUser(Users[0].id)

tweet1.reply(Users[1].id,'testando')


tweet1.like(Users[2].id)
tweet1.like(Users[1].id)
tweet1.like(Users[0].id)

findTweetById(allTweets[0]._tweetId)








