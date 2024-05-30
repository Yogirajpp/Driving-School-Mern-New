import express from 'express';
import DrivingSchool from '../models/DrivingSchool.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const school = new DrivingSchool(req.body);
    await school.save();
    res.status(201).send(school);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const schools = await DrivingSchool.find();
    res.status(200).send(schools);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
