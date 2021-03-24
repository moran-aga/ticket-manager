const { Router } = require("express");
const tickets = Router();
const Ticket = require("../../../models/ticket");

//get all tickets
tickets.get("/", (req, res) => {
 Ticket.find({})
  .then((DBtickets) => {
   res.json({ DBtickets });
  })
  .catch((err) => {
   res.json({ error: err.message });
  });
});

//get ticket with search params
tickets.get("/", (req, res) => {
 const query = req.query.searchText;
 const regex = new RegExp(query);
 Ticket.find({ title: { $regex: regex, $options: "i" } })
  .then((titles) => {
   res.json({ titles });
  })
  .catch();
});

module.exports = tickets;
