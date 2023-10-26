const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  index,
  new: newFlight,
  create,
  show,
};

async function index(req, res) {
  try {
    const flights = await Flight.find({});
    res.render("flights/index", { flights });
  } catch (err) {
    res.redirect(`/flights/${flight._id}`, { error: err.message });
  }
}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id });
    res.render("flights/show", { flight, tickets });
  } catch (err) {
    res.redirect(`/flights/${flight._id}`, { error: err.message });
  }
}

function newFlight(req, res) {
  res.render("flights/new", { errorMsg: "" });
}

async function create(req, res) {
  try {
    const flight = await Flight.create(req.body);
    // Redirect to the new flight's show functionality
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    res.render("flights/new", { errorMsg: err.message });
  }
}
