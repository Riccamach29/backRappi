import 'dotenv/config.js'; 
import "../../config/database.js";
import Anime from '../Anime.js';

let animes = [
    { title: "Naruto", genre: "Shonen", year: 2002 },
    { title: "Attack on Titan", genre: "Action", year: 2013 },
    { title: "One Piece", genre: "Adventure", year: 1999 },
    { title: "Death Note", genre: "Psychological", year: 2006 },
    { title: "Demon Slayer", genre: "Fantasy", year: 2019 },
    { title: "Dragon Ball Z", genre: "Shonen", year: 1989 },
    { title: "Fullmetal Alchemist", genre: "Adventure", year: 2003 },
    { title: "Tokyo Ghoul", genre: "Horror", year: 2014 },
    { title: "Bleach", genre: "Shonen", year: 2004 },
    { title: "Hunter x Hunter", genre: "Adventure", year: 2011 },
    { title: "My Hero Academia", genre: "Superhero", year: 2016 },
    { title: "Sword Art Online", genre: "Isekai", year: 2012 },
    { title: "Steins;Gate", genre: "Sci-Fi", year: 2011 },
    { title: "Cowboy Bebop", genre: "Action", year: 1998 },
    { title: "Neon Genesis Evangelion", genre: "Mecha", year: 1995 }
];

Anime.insertMany(animes);