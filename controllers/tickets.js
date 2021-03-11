const Flight = require('../models/flights');
const Ticket = require('../models/ticket');

module.exports = {
    showTicket,
    create,
    addtoFlight,
    addTicket
};
// {
//   seat: "A3",
//   price: 111,
//   flight: 'aerjoguiohaewiuht3495797'
// }

function addTicket(req, res){
  req.body.flight = req.params.flightId
  
  const ticket = new Ticket(req.body);
  ticket.save(function(err){
    // If error, render to the ticket form page
    if (err) res.render('flights/tickets')

    // If success,  Show Flight page redirect
    res.redirect(`/flights/${req.params.flightId}`)
  })

}




















function addtoFlight(req, res){
    Flight.findById(req.params.flightId, function(err, flight){
      ticket.flight.push(req.body.flightId);
      flight.save(function(err){
        res.redirect(`/flights/${flight._id}`)
      })
    })   
}

function showTicket(req, res){
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/tickets', {
            flight,
        })
    })
};

function create(req, res) {
    Ticket.findById(req.params.id, function(err, ticket) {
      ticket.flight.push(req.body);
      ticket.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }