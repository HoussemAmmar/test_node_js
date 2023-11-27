import express from 'express'
import * as dotenv from 'dotenv';

import citiesRoutes from './routes/cities';



dotenv.config();

const app = express();

app.use(citiesRoutes);



app.listen(process.env.PORT || 3000); 