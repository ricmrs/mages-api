import 'dotenv/config'
import express from 'express'
import { homePage, routeStructure } from './assets/routes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/:type', routeStructure)
app.get('/', homePage)

export default app