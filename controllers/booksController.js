import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getAllBooks = async (req, res) => {
    try {
        const response = await prisma.book.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            msg: error.message,
        });
    }
};

export const getBookById = async (req, res) => {
    try {
        const response = await prisma.book.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({
            msg: error.message,
        });
        z;
    }
};

export const createBook = async (req, res) => {
    try {
        const { judul, penulis } = req.body;
        const book = await prisma.book.create({
            data: {
                judul: judul,
                penulis: penulis,
            },
        });
        res.status(200).json({
            msg: "data baru berhasil dimasukkan.",
            data: book,
        });
    } catch (error) {
        res.status(400).json(error.message);
    }
};

export const updateBook = async (req, res) => {
    try {
        const { judul, penulis } = req.body;
        const updateBook = await prisma.book.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                judul: judul,
                penulis: penulis,
            },
        });

        res.status(200).json({
            msg: "berhasil diupdate",
        });
    } catch (error) {
        res.status(404).json({
            msg: error.message,
        });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const response = await prisma.book.delete({
            where: {
                id: Number(req.params.id),
            },
        });
        res.status(200).json({
            msg: "data berhasil dihapus.",
        });
    } catch (error) {
        res.status(404).json({
            msg: error.message,
        });
    }
};
