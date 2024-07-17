import express from 'express';
import cors from 'cors';
import imageDescriptonRoutes from './routes/ImageDescription.js';
import { connectDb } from './utils/db.js';
const port = 4000;
connectDb();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// using routes
app.use("/api/imagedescription", imageDescriptonRoutes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
