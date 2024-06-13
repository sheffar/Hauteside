import mongoose from "mongoose";

export const ConnectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI as string)
        console.log('Connected')
    } catch (error) {
        console.log('Could not connect to the database')
    }
}