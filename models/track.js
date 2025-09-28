import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
   title: String,
   artist: String,
});

export default mongoose.model("Track", trackSchema);