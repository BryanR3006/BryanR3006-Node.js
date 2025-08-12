import express from 'express'
const app = express()
import router from './router'
import {connectDB} from './config/db'


//Routing
//Para las rutas se utilizan app y el metodo 

//Se puede usar get post delete el q se necesita pero para q revise cada una de las peticiones se hace con user 
//app.user
app.use(express.json())

app.use('/', router)

// Leer datos  de formularios
export default app