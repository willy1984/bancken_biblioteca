const Libro = require('../models/Libro');

exports.obtenerLibros = async (req, res) => {
    const libros = await Libro.find();
    res.json(libros);
};

exports.obtenerLibroPorId = async (req, res) => {
    const libro = await Libro.findById(req.params.id);
    libro ? res.json(libro) : res.status(404).json({ message: 'Libro no encontrado' });
};

exports.crearLibro = async (req, res) => {
    const nuevoLibro = new Libro(req.body);
    const libroGuardado = await nuevoLibro.save();
    res.status(201).json(libroGuardado);
};

exports.actualizarLibro = async (req, res) => {
    const libroActualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    libroActualizado ? res.json(libroActualizado) : res.status(404).json({ message: 'Libro no encontrado' });
};

exports.eliminarLibro = async (req, res) => {
    const libroEliminado = await Libro.findByIdAndDelete(req.params.id);
    libroEliminado ? res.json({ message: 'Libro eliminado' }) : res.status(404).json({ message: 'Libro no encontrado' });
};
