import mongoose from "mongoose";
export const connectDb = async () => {
    mongoose.connect("mongodb+srv://akhil1659:G0FWOR4MqOttWXXs@cluster0.qpldn6h.mongodb.net/").then((c) => {
        console.log(`Connected to ${c.connection.host}`);
    }).catch((err) => {
        console.log(err);
    });
};
