import {Schema, model} from "mongoose";

let collection = "scientists";

let schema = Schema({
    name: {type: String, required: true},
    field: {type: String, required: true},
    knownFor: {type: String, required: true},
    birthYear: {type: Number, required: true},
    deathYear: {type: Number, required:false},
    nationality: {type: String, required: true},
    awards: {type: String, required: false},
},{
    timestamps: true
});

let Scientist = model(collection, schema);
export default Scientist;