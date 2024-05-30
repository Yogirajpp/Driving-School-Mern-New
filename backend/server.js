import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import drivingSchoolRoutes from './routes/drivingSchools.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/driving-schools', drivingSchoolRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});