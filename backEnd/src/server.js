import express, { request } from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB}  from './config/db.js';

import dotenv from 'dotenv';
dotenv.config(); // make sure this is at the top

const app = express();

const port = process.env.PORT || 5001;

// Database connection
connectDB();


app.use("/api/notes", notesRoutes);
//app.use("/api/anything", anythingRoutes);

app.listen(port, () => {console.log(`Server is running on port ${port}`)});

