import Track from "../models/track.js";

// POST "/tracks"
export const createTrack = async (req, res) => {
  try {
    const data = await Track.create(req.body);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.json({ error: error.message });
  }
};

// GET "/tracks"
export const getAllTracks = async (req, res) => {
  try {
    const tracks = await Track.find({});
    res.json(tracks);
  } catch (error) {
    console.error(error);
    res.json({ error: error.message });
  }
};

// GET "/tracks/:trackId"
export const getTrack = async (req, res) => {
  try {
    const track = await Track.findById(req.params.trackId);

    if (!track) {
      res.status(404).json({ error: "Track not found" });
    }

    res.json(track);
  } catch (error) {
    console.error(error);
    res.json({ error: error.message });
  }
};

// PUT "/tracks/:trackId"
export const updateTrack = async (req, res) => {
  try {
    const track = await Track.findByIdAndUpdate(req.params.trackId, req.body, {
      new: true,
    });

    if (!track) {
      res.status(404).json({ error: "Track not found" });
    }
  } catch (error) {
    console.error(error);
    res.json({ error: error.message });
  }
};

// DELETE "/tracks/:trackId"
export const deleteTrack = async () => {
  try {
   const deletedTrack = await Track.findByIdAndDelete(req.params.trackId);

   if (!deletedTrack) {
      res.json({error: "Track not found."})
   }

   res.json(deletedTrack)
  } catch (error) {
    console.error(error);
    res.json({ error: error.message });
  }
};
