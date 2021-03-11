const Flight = require('../models/flights');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    addDestination
};

function addDestination(req, res){
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body); // arr stations + date/time
        flight.save(function(err){
            console.log(flight.save);
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight._id}, function(err, tickets){
            console.log(tickets)
            res.render('flights/show', {
                flight,
                tickets
            });
        })
    })
};

function index(req, res){
    Flight.find({}, function(err, flightDocuments){
        res.render('flights/index', {
            flights: flightDocuments
        })
    })
};

function newFlight(req, res){
    res.render('flights/new');
};

function create(req, res) {
    let dt = new Flight().departs
    if (!req.body.departs){
        req.body.departs = dt
    }
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
};

