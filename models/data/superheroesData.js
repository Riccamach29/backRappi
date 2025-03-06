import 'dotenv/config.js'; 
import "../../config/database.js";
import Superhero from '../Superhero.js';

let superheroes = [
    { name: "Superman", universe: "DC", power: "Super strength", debutYear: 1938, team: "Justice League" },
    { name: "Batman", universe: "DC", power: "Genius intellect", debutYear: 1939, team: "Justice League" },
    { name: "Spider-Man", universe: "Marvel", power: "Agility and web-slinging", debutYear: 1962, team: "Avengers" },
    { name: "Iron Man", universe: "Marvel", power: "High-tech armor", debutYear: 1963, team: "Avengers" },
    { name: "Thor", universe: "Marvel", power: "God of Thunder", debutYear: 1962, team: "Avengers" },
    { name: "Wonder Woman", universe: "DC", power: "Super strength", debutYear: 1941, team: "Justice League" },
    { name: "Flash", universe: "DC", power: "Super speed", debutYear: 1940, team: "Justice League" },
    { name: "Hulk", universe: "Marvel", power: "Incredible strength", debutYear: 1962, team: "Avengers" },
    { name: "Captain America", universe: "Marvel", power: "Super soldier", debutYear: 1941, team: "Avengers" },
    { name: "Doctor Strange", universe: "Marvel", power: "Magic", debutYear: 1963, team: "Avengers" },
    { name: "Aquaman", universe: "DC", power: "Water control", debutYear: 1941, team: "Justice League" },
    { name: "Deadpool", universe: "Marvel", power: "Regeneration", debutYear: 1991, team: "X-Men" },
    { name: "Black Panther", universe: "Marvel", power: "Enhanced abilities", debutYear: 1966, team: "Avengers" },
    { name: "Green Lantern", universe: "DC", power: "Power ring", debutYear: 1940, team: "Justice League" },
    { name: "Wolverine", universe: "Marvel", power: "Adamantium claws", debutYear: 1974, team: "X-Men" }
];

Superhero.insertMany(superheroes);