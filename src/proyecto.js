//importacion de las rutas
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import pkg from '../package.json'
import './database'



const app = express()

const port = 50000

//usar los modulos
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

app.set('pkg', pkg)

app.get('/', (req, res) => {
    res.json({
        version: app.get('pkg').version,
        author: app.get('pkg').author,
        name: app.get('pkg').name
    })
})

app.listen(port,() =>{

    console.log('servidor escuchando en el puerto',)
})
