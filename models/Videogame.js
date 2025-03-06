import {Schema, model} from "mongoose";

let collection = "videogames";

let schema = Schema({
    name: {type: String, required: true},
    genre: {type: String, required: true},
    platform: {type: String, required: true},
    releaseYear: {type: Number, required: true},
},{
    timestamps: true
});

let Videogame = model(collection, schema);

export default Videogame;