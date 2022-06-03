
const express = require('express');
const cors = require('cors');

const {db} = require('./firebase-config')

const app = express();
app.use(express.json())
app.use(cors())



app.get("/", (request, response) => {
    response.send('<h1>Hola Mundo</h1> <br> <h3>Para acceder a la api usa la siguiente ruta <i> /api/pqr </i> </h3>')
})

app.get("/firepqr", async(request, response) => {
    const result = await db.collection('pqr').get()
    const pqrs = result.docs.map(doc => ({
        id: doc.id,
        contenido: doc.data().contenido,
        correo: doc.data().correo,
        fecha: doc.data().fecha,
        nombre: doc.data().nombre,
        telefono: doc.data().telefono,
        tipoPublicacion: doc.data().tipoPublicacion
    }))
    console.log(pqrs)
    response.json(pqrs)
    //response.send('<h1>Conectando Firebase</h1>')
})

app.get("/api/pqr", (request, response) => {
    response.json(notes)
})

app.post("/api/pqr", (request, response) => {
    const note = request.body
    console.log(note)
    response.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Servidor Corriendo en  ${PORT}`)
})
