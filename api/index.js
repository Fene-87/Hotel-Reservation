import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";

dotenv.config();

/* const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDb');
    } catch (error) {
        throw error;
    }
} */

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO);
  console.log('Connected to Mongo db');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

mongoose.connection.on("disconnected", () => {
    console.log('MongoDb disconnected');
});

mongoose.connection.on("connected", () => {
    console.log('MongoDb connected');
})

// Middlewares
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/hotels', hotelsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong';
    return res.status(errorStatus).json(errorMessage);
})

app.listen(8800, () => {
    console.log('Connected Successfully')
})