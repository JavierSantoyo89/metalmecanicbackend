import express, { Request, Response } from 'express'
// import express from 'express'

// import cors from "cors";
import dotenv from 'dotenv'
import mainRoutes from './routes/mainRoutes'
const dateActual = new Date()
dotenv.config()
const app = express()


// ------- Ruta para hacer publica la carpeta "public" ------- //
app.use(express.static("./src/public"));
// ------- Ruta para hacer publica la carpeta "public" ------- //
// app.use(express.static("./src/public"));
// app.set("views","./src/views/");
// ---- Configuracion previa para usar metodos post, put & delete ---- //
app.disable('x-powered-by') // ------ Deshabilita el mostrarlo ----- //
app.use(express.urlencoded({ extended: false})); // convierte el form a objeto literal
app.use(express.json()); // convierte a JSON

// ------- Direcciones raises de los proyectos ------- //
app.use("/", mainRoutes);
app.use((_req:Request, res:Response) => {
  res.status(404).send("Endpoint wrong, sorry can't find that!")
})

// ------- levantar servidor ------- //
const PORT = process.env.PORT || 1689
app.listen(PORT, () => {
	console.log(`server online http://localhost:${PORT}/`)
	console.log(`Hora: ${new Date().toLocaleTimeString()} Fecha: ${new Date().toLocaleDateString()}`)
	console.log(`Hora del sistema: ${dateActual}`)
})