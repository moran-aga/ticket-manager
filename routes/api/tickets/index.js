const { Router } = require("express");
const tickets = Router();
const Ticket = require("../../../models/ticket");

// If there is a searchText query, it will get the matching, if not it gets all tickets
tickets.get("/", (req, res) => {
 const {searchText} = req.query;
 Ticket.find({ title: new RegExp(searchText, 'i') })
  .then(DbTickets => {
      res.status(200).json(DbTickets);
  })
  .catch(err => {
      res.status(500).json({ error: err.message });
  });
});

tickets.patch('/:ticketId/done', (req, res) => {
    const { ticketId } = req.params;
    Ticket.findOne({ _id: ticketId })
    .then(result => {
        result.updateOne({ done: true })
        .then(_ => {
            res.status(200).json({updated: true});
        })
    })
    .catch(err => res.status(500).json({error: err.message}))
});

tickets.patch('/:ticketId/undone', (req, res) => {
    const { ticketId } = req.params;
    Ticket.findOne({_id: ticketId})
    .then(result => {
        result.updateOne({done: false})
        .then(_  => {
            res.status(200).json({updated: true});
        })
    })
    .catch(err => {
        res.status(500).json({message: err.message});
    }) 
})

module.exports = tickets;
