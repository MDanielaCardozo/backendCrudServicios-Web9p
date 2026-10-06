//console.log("Bienvenidos al backend");
import Server from "./src/server/config.js"
import router from "./src/routes/index.routes.js"

//crear server
const server = new Server()

//leer las rutas
server.app.use('/api', router)

//escuchar el puerto
server.listen()
