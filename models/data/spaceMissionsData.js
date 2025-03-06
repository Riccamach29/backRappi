import 'dotenv/config.js'; 
import "../../config/database.js";
import SpaceMissions from '../SpaceMission.js';

let spaceMissions = [
    { name: "Apollo 11", agency: "NASA", launchYear: 1969, destination: "Moon", crewSize: 3, success: true },
    { name: "Sputnik 1", agency: "Soviet Union", launchYear: 1957, destination: "Low Earth Orbit", crewSize: 0, success: true },
    { name: "Voyager 1", agency: "NASA", launchYear: 1977, destination: "Interstellar Space", crewSize: 0, success: true },
    { name: "Mars Rover Curiosity", agency: "NASA", launchYear: 2011, destination: "Mars", crewSize: 0, success: true },
    { name: "Apollo 13", agency: "NASA", launchYear: 1970, destination: "Moon", crewSize: 3, success: false },
    { name: "Luna 2", agency: "Soviet Union", launchYear: 1959, destination: "Moon", crewSize: 0, success: true },
    { name: "Hubble Space Telescope", agency: "NASA/ESA", launchYear: 1990, destination: "Low Earth Orbit", crewSize: 0, success: true },
    { name: "Vostok 1", agency: "Soviet Union", launchYear: 1961, destination: "Low Earth Orbit", crewSize: 1, success: true },
    { name: "Chandrayaan-3", agency: "ISRO", launchYear: 2023, destination: "Moon", crewSize: 0, success: true },
    { name: "James Webb Space Telescope", agency: "NASA/ESA", launchYear: 2021, destination: "Lagrange Point 2", crewSize: 0, success: true },
    { name: "Artemis I", agency: "NASA", launchYear: 2022, destination: "Moon", crewSize: 0, success: true },
    { name: "Tianwen-1", agency: "CNSA", launchYear: 2020, destination: "Mars", crewSize: 0, success: true },
    { name: "New Horizons", agency: "NASA", launchYear: 2006, destination: "Pluto", crewSize: 0, success: true },
    { name: "Skylab", agency: "NASA", launchYear: 1973, destination: "Low Earth Orbit", crewSize: 3, success: true },
    { name: "Galileo", agency: "NASA", launchYear: 1989, destination: "Jupiter", crewSize: 0, success: true }
];

SpaceMissions.insertMany(spaceMissions);