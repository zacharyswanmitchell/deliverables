const Ticket = require("../models/ticket");

module.exports = {
  new: newTicket,
  create,
};

function newTicket(req, res) {
  const flightId = req.params.id;
  res.render("tickets/new", { title: "Add Ticket", flightId });
}

async function create(req, res) {
  try {
    const flightId = req.params.id;
    const ticket = await Ticket.create(req.body);
    ticket.flight = flightId;
    await ticket.save();
    res.redirect(`/flights/${flightId}`);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
