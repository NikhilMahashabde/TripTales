import Trip from "../model/trip.js";

const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json({ data: trips });
  } catch (error) {
    console.log(error);
  }
};

const handleNewTrip = async (req, res) => {
  console.log("request.body:", req.body);

  const newTrip = {
    name: req.body.name,
    destinations: req.body.destinations,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  };

  if (!Object.values(newTrip))
    return res.status(422).json({ message: "Missing data input" });

  try {
    await Trip.create(newTrip);
    res.json({ message: "Successfully created", data: newTrip });
  } catch (error) {
    res.status(400).json({ error: "Failed to created trip", data: newTrip });
  }
};

const handleEditTrip = async (req, res) => {
  console.log("edit data input:", req.params.id, req.body);

  _id = req.params.id;

  const updateData = {
    name: req.body.name ?? undefined,
    destinations: req.body.destinations ?? undefined,
    startDate: req.body.startDate ?? undefined,
    endDate: req.body.endDate ?? undefined,
  };

  try {
    const updatedTrip = await Trip.findByIdAndUpdate(_id, updateData, {
      new: true,
    });

    if (!updatedTrip)
      return res
        .status(400)
        .json({ error: "Trip did not update", data: updatedTrip });

    res.json({ message: "Successfully created", data: updatedTrip });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to created trip", data: updatedTrip });
  }
};

const handleDeleteTrip = async (req, res) => {
  _id = req.params.id;

  try {
    await Trip.findByIdAndRemove(_id);
    return res.json({ message: "Successfully deleted trip" });
  } catch (error) {
    res.status(400).json({ error: `Trip with ${_id} did not delete` });
  }
};

export { getAllTrips, handleNewTrip, handleEditTrip, handleDeleteTrip };
