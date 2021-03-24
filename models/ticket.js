const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
 title: { type: String, required: true },
 content: { type: String, required: true },
 userEmail: { type: String, required: true },
 done: Boolean,
 creationTime: { type: Number, default: Date.now() },
 labels: [String],
});

module.exports = mongoose.model("Ticket", ticketSchema);
