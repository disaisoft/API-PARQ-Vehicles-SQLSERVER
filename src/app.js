import express from 'express'
import config from './config'
import vehiclesRoutes from './routes/vehicles.routes'

const app = express()


//settings 
app.set('port', config.port);

//midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.use(vehiclesRoutes)



export default app