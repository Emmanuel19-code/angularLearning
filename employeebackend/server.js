import express from 'express'
import { Connection } from './database/connection.js'
import WorkerRoute from "./routes/worker.js"
import {} from 'dotenv/config'

const app = express()
const port = 5000 


app.use(express.json())

app.use('/api/v1/worker',WorkerRoute)


app.listen(port,()=>{
    Connection()
    console.log('server started ✔✔✔')
})