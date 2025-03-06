import {Schema, model} from "mongoose";

let collection = "animes";

let schema = Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    year: {type: Number, required: true},
},{
    timestamps: true
});

let Anime = model(collection, schema);

export default Anime;