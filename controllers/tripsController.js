// This file is the trip controller. It handles all the CRUD operations for trips.
// require trips model
import { find, findById, create, updateOne } from "../model/tripsModel";

// get all trips
function getAllTrips(req, res) {
  find({}, (err, trips) => {
    if (err) {
      console.log(err);
    } else {
      res.json(trips);
    }
  });
}

// get one trip
function getOneTrip(req, res) {
  findById(req.params.id, (err, trip) => {
    if (err) {
      console.log(err);
    } else {
      res.json(trip);
    }
  });
}

// create a trip
function createTrip(req, res) {
  create(req.body, (err, trip) => {
    if (err) {
      console.log(err);
    } else {
      res.json(trip);
    }
  });
}

// Angela's code
updateOne({ _id: req.params.id }, req.body, (err, trip) => {
  if (err) {
    console.log(err);
  } else {
    res.json(trip);
    console.log("Successfully updated the document.");
  }
});

//ROUTES GO HERE
