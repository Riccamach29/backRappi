import {Schema, model} from "mongoose";

let collection = "spaceMissions";

let schema = Schema({
    name: {type: String, required: true},
    agency: {type: String, required: true},
    launchYear: {type: Number, required: true},
    destination: {type: String, required: true},
    crewSize: {type: Number, required: true},
    success: {type: Boolean, required: true},
},{
    timestamps: true
});

let SpaceMission = model(collection, schema);
export default SpaceMission;