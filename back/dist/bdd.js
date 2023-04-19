"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onReady = void 0;
const dotenv_1 = require("dotenv");
const mongodb_1 = require("mongodb");
const rxjs_1 = require("rxjs");
(0, dotenv_1.config)();
const client = new mongodb_1.MongoClient(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`);
let db;
exports.onReady = new rxjs_1.Subject();
client.connect().then((r) => __awaiter(void 0, void 0, void 0, function* () {
    db = client.db("multigame");
    yield Promise.all([
        // db.createCollection("users", {}).catch(e => { }),
        db.createCollection("games", {}).catch(e => { }),
    ]);
    exports.onReady.next(true);
}));
const makeId = () => {
    return Math.floor((1 + Math.random()) * 0x1000000000000000)
        .toString(32);
};
// const res = await db.collection("users").insertOne(doc);
// await db.collection("games").updateOne({ _id: new ObjectId(game.id) }, { $set: game });
// await db.collection("games").insertOne({ ...game, _id: new ObjectId(game.id) })
// const res = (await db.collection("games").findOne({ _id: new ObjectId(gameId) }));
