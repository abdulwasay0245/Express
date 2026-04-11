import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();

app.use(express.json({ limit: '100kb' }))
app.use(express.urlencoded({ limit: '100kb', extended: true }))
app.use(express.static('public'))
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))
app.use(cookieParser())

export { app }