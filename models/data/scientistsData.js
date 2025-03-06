import 'dotenv/config.js'; 
import "../../config/database.js";
import Scientist from '../Scientist.js';

let scientists = [
    { name: "Albert Einstein", field: "Physics", knownFor: "Theory of Relativity", birthYear: 1879, deathYear: 1955, nationality: "German", awards: "Nobel Prize" },
    { name: "Isaac Newton", field: "Physics", knownFor: "Laws of Motion", birthYear: 1643, deathYear: 1727, nationality: "English", awards: "Knighted" },
    { name: "Marie Curie", field: "Chemistry", knownFor: "Radioactivity", birthYear: 1867, deathYear: 1934, nationality: "Polish", awards: "Nobel Prize (twice)" },
    { name: "Nikola Tesla", field: "Engineering", knownFor: "Alternating Current", birthYear: 1856, deathYear: 1943, nationality: "Serbian", awards: "Edison Medal" },
    { name: "Galileo Galilei", field: "Astronomy", knownFor: "Heliocentric Theory", birthYear: 1564, deathYear: 1642, nationality: "Italian", awards: "None" },
    { name: "Stephen Hawking", field: "Theoretical Physics", knownFor: "Black Hole Radiation", birthYear: 1942, deathYear: 2018, nationality: "British", awards: "Presidential Medal of Freedom" },
    { name: "Charles Darwin", field: "Biology", knownFor: "Theory of Evolution", birthYear: 1809, deathYear: 1882, nationality: "British", awards: "Royal Medal" },
    { name: "Johannes Kepler", field: "Astronomy", knownFor: "Laws of Planetary Motion", birthYear: 1571, deathYear: 1630, nationality: "German", awards: "None" },
    { name: "Richard Feynman", field: "Physics", knownFor: "Quantum Electrodynamics", birthYear: 1918, deathYear: 1988, nationality: "American", awards: "Nobel Prize" },
    { name: "Alan Turing", field: "Computer Science", knownFor: "Turing Machine", birthYear: 1912, deathYear: 1954, nationality: "British", awards: "Order of the British Empire" },
    { name: "Dmitri Mendeleev", field: "Chemistry", knownFor: "Periodic Table", birthYear: 1834, deathYear: 1907, nationality: "Russian", awards: "Copley Medal" },
    { name: "Rosalind Franklin", field: "Biology", knownFor: "DNA Structure", birthYear: 1920, deathYear: 1958, nationality: "British", awards: "None" },
    { name: "Niels Bohr", field: "Physics", knownFor: "Atomic Structure", birthYear: 1885, deathYear: 1962, nationality: "Danish", awards: "Nobel Prize" },
    { name: "James Clerk Maxwell", field: "Physics", knownFor: "Electromagnetic Theory", birthYear: 1831, deathYear: 1879, nationality: "Scottish", awards: "Rumford Medal" },
    { name: "Ada Lovelace", field: "Mathematics", knownFor: "First Computer Algorithm", birthYear: 1815, deathYear: 1852, nationality: "British", awards: "None" }
];

Scientist.insertMany(scientists);