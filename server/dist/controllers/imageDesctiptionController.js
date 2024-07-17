import { ImageDescription } from "../models/imageDescriptionModel.js";
export const AddNewImageDescription = async (req, res) => {
    try {
        const { userId, imageUrl, description } = req.body;
        const newData = await ImageDescription.create({ userId, imageUrl, description });
        res.status(200).json({ message: "Data added successfully", data: newData });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const getAllImageDescription = async (req, res) => {
    try {
        const { userId } = req.query;
        const data = await ImageDescription.find({ userId });
        res.status(200).json({ data });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const deleteImageDescription = async (req, res) => {
    try {
        const { id } = req.query;
        const data = await ImageDescription.findByIdAndDelete(id);
        res.status(200).json({ message: "Data deleted successfully", data });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const getImageDescriptionById = async (req, res) => {
    try {
        const { id } = req.query;
        const data = await ImageDescription.findById(id);
        res.status(200).json({ data });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
