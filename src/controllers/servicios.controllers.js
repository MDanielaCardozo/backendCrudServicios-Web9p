export const prueba = (req, res) => {
    console.log("prueba desde mi primer controlador");
    res.status(200).json({mensaje: "Primer controlador exitoso"})
};

