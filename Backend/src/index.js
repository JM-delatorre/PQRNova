
const express = require('express');
const cors = require('cors');

const {db} = require('./firebase-config')

const app = express();
app.use(express.json())
app.use(cors())



app.get("/", (request, response) => {
    response.send('<h1>Hola Mundo</h1> <br> <h3>Para acceder a la api usa la siguiente ruta <i> /api/pqr </i> </h3>')
})

app.get("/api/pqr", async(request, response) => {
    const result = await db.collection('pqr').get()
    if (result.empty){
        response.status(204).send('No hay ninguna queja ni sugerencia')
    }else{
        const pqrs = result.docs.map(doc => ({
            id: doc.id,
            nombre: doc.data().nombre,
            telefono: doc.data().telefono,
            correo: doc.data().correo,
            tipoPublicacion: doc.data().tipoPublicacion,
            contenido: doc.data().contenido,
            fecha: doc.data().fecha,
        }))
        response.json(pqrs)
    }
    
})


app.post("/api/pqr", async(request, response) => {
    try{
        let pqr = request.body
        let fechaAct = Date.now()
        pqr = {...pqr, 
        fecha: fechaAct}
        await db.collection('pqr').add(pqr)
        response.json(pqr)
    }catch(error){
        response.status(400).send(error.message)
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Servidor Corriendo en  ${PORT}`)
})
