import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {pool, dbInitializer} from './config/dbConfig.js'
import errorHandling from './middlewares/errorHandler.js'
import authRoute from './routes/authRoute.js'
import empRoute from './routes/empRoute.js'

dotenv.config()

//db initializer
dbInitializer()

const app = express()
const port = process.env.PORT || 3001

//middleware
app.use(express.json());
app.use(cors());

//test database test route
app.get('/', async(req, res) => {
    const result = await pool.query('SELECT current_database()')
    res.send(`Current database name: ${result.rows[0].current_database}`)
})

//routes
app.use('/api/auth', authRoute)
app.use('/api/employee', empRoute)

//error handling
app.use(errorHandling)

//app running
app.listen(port, () => {
    console.log("Server is running on port ", port)
})