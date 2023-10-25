const Flight = require("../models/flight");

module.exports = {
  new: newFlight,
  create,
  index,
  show,
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render("flights/index", { flights });
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render("flights/show", { flight });
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
        res.render("flights/new", { errorMsg: err.message })
    }
}
