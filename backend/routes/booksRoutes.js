import express from 'express';
import { Book } from '../models/bookModel.js';
const router = express.Router();

//Ruta para guardar un nuevo libro

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Manda todos los campos requeridos",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


//Ruta para obtener todos los libros

router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });


    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
})


//Ruta para obtener los libros con ese id

router.get("/:id", async (req, res) => {
    try {

        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);


    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
})

//Actualizar libros

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Manda todos los campos requeridos",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    return res
      .status(200)
      .send({ message: "Libro actualizado correctamente" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//borrar un libro

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    return res.status(200).send({message: "Libro eliminado correctamente"});
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


export default router;