import mongoose from 'mongoose';

const DrivingSchoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  contact: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('DrivingSchool', DrivingSchoolSchema);
