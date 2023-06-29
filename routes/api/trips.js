import express from "express";
import {
  getAllTrips,
  handleNewTrip,
  handleEditTrip,
  handleDeleteTrip,
} from "../../controllers/tripsController.js";

const router = express.Router();

router.route("/").get(getAllTrips).post(handleNewTrip);

router
  .route("/:id")
  .put(handleEditTrip)
  .delete(handleDeleteTrip)
  .patch(handleEditTrip);

export default router;
