import express from 'express';
import { AddNewImageDescription, deleteImageDescription, getAllImageDescription, getImageDescriptionById } from '../controllers/imageDesctiptionController.js';


const app = express.Router()

app.post('/add', AddNewImageDescription)
app.get('/get-All', getAllImageDescription)
app.get('/getbyId', getImageDescriptionById)
app.delete('/delete', deleteImageDescription)

export default app;