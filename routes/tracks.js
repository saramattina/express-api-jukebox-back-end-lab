import { Router } from "express";
import * as tracksController from "../controllers/tracks.js";

const router = Router();

router.post("/", tracksController.createTrack);
router.get("/", tracksController.getAllTracks);
router.get("/:trackId", tracksController.getTrack);
router.put("/:trackId", tracksController.updateTrack);
router.delete("/:trackId", tracksController.deleteTrack);


export default router;