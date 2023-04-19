import { config } from "dotenv";
import { MongoClient } from "mongodb";
import { Subject } from "rxjs";

config()
const client = new MongoClient(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`);
let db: ReturnType<MongoClient["db"]>;

export const onReady = new Subject<boolean>()

client.connect().then(async r => {
    db = client.db("multigame");
    await Promise.all([
        // db.createCollection("users", {}).catch(e => { }),
        db.createCollection("games", {}).catch(e => { }),
    ])
    onReady.next(true);
});

const makeId = () => {
    return Math.floor((1 + Math.random()) * 0x1000000000000000)
        .toString(32)
}

// const res = await db.collection("users").insertOne(doc);
// await db.collection("games").updateOne({ _id: new ObjectId(game.id) }, { $set: game });
// await db.collection("games").insertOne({ ...game, _id: new ObjectId(game.id) })
// const res = (await db.collection("games").findOne({ _id: new ObjectId(gameId) }));
