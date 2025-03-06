import {Schema, model} from "mongoose";

let collection = "superheroes";

let schema = Schema({
    name: {type: String, required: true},
    universe: {type: String, required: true},
    power: {type: String, required: true},
    debutYear: {type: Number, required: true},
    team: {type: String, required: true},
},{
    timestamps: true
});

    let Superhero = model(collection, schema);
    export default Superhero;