const { Router } = require("express");
const tickets = Router();
const Ticket = require("../../../models/ticket");

// If there is a searchText query, it will get the matching, if not it gets all tickets
tickets.get("/", (req, res) => {
 const {searchText} = req.query;
 Ticket.find({ title: new RegExp(searchText, 'i') })
  .then(DbTickets => {
   res.json({ DbTickets });
  })
  .catch(err => {
      res.status(500).json({ error: err.message});
  });
});

tickets.patch('/:ticketId', (req, res) => {
    const { ticketId } = req.params;
    Ticket.findOneAndUpdate({ _id: ticketId },  { done: true }, {new: true})
    .then(result => {
        res.status(200).json({updated: true});
    })
})

module.exports = tickets;
