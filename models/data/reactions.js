let reactions = [
  {
    itineraryId: "63864735b78bac84161ac147",
    name: "like",
    icon: "https://cdn-icons-png.flaticon.com/512/456/456115.png",
    iconBack: "https://cdn-icons-png.flaticon.com/512/739/739282.png",
    userId: ["6386e81c7af2d363643c741f"],
  },
  {
    itineraryId: "63864735b78bac84161ac147",
    name: "not-like",
    icon: "https://cdn-icons-png.flaticon.com/512/1612/1612768.png",
    iconBack: "https://cdn-icons-png.flaticon.com/512/1612/1612623.png",
    userId: ["6386e81c7af2d363643c741f"],
  },
  {
    itineraryId: "63864735b78bac84161ac147",
    name: "love",
    icon: "https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
    iconBack: "https://cdn-icons-png.flaticon.com/512/2107/2107952.png",
    userId: ["6386e81c7af2d363643c741f"],
  },
  {
    itineraryId: "63864735b78bac84161ac147",
    name: "surprise",
    icon: "https://cdn-icons-png.flaticon.com/512/260/260164.png",
    iconBack: "https://cdn-icons-png.flaticon.com/512/2341/2341959.png",
    userId: ["6386e81c7af2d363643c741f"],
  },
];

require("dotenv").config();
require("../database");
const Reaction = require("../../models/Reaction");

reactions.forEach((elemento) => {
  Reaction.create({
    eventId: elemento.eventId,
    name: elemento.name,
    icon: elemento.icon,
    iconBack: elemento.iconBack,
    userId: elemento.userId,
  });
});