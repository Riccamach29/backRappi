import 'dotenv/config.js'; 
import "../../config/database.js";
import Videogame from '../Videogame.js';

let videogame = [
    { name: "The Legend of Zelda", genre: "Adventure", platform: "Nintendo", releaseYear: 1986 },
    { name: "God of War", genre: "Action", platform: "PlayStation", releaseYear: 2005 },
    { name: "Minecraft", genre: "Sandbox", platform: "Multiplatform", releaseYear: 2011 },
    { name: "Halo", genre: "Shooter", platform: "Xbox", releaseYear: 2001 },
    { name: "Super Mario Bros", genre: "Platformer", platform: "Nintendo", releaseYear: 1985 },
    { name: "The Witcher 3", genre: "RPG", platform: "Multiplatform", releaseYear: 2015 },
    { name: "Red Dead Redemption 2", genre: "Action", platform: "Multiplatform", releaseYear: 2018 },
    { name: "Resident Evil 4", genre: "Survival Horror", platform: "Multiplatform", releaseYear: 2005 },
    { name: "Fortnite", genre: "Battle Royale", platform: "Multiplatform", releaseYear: 2017 },
    { name: "Cyberpunk 2077", genre: "RPG", platform: "Multiplatform", releaseYear: 2020 },
    { name: "Call of Duty", genre: "Shooter", platform: "Multiplatform", releaseYear: 2003 },
    { name: "FIFA 23", genre: "Sports", platform: "Multiplatform", releaseYear: 2022 },
    { name: "GTA V", genre: "Open World", platform: "Multiplatform", releaseYear: 2013 },
    { name: "League of Legends", genre: "MOBA", platform: "PC", releaseYear: 2009 },
    { name: "Elden Ring", genre: "RPG", platform: "Multiplatform", releaseYear: 2022 }
];

Videogame.insertMany(videogame);