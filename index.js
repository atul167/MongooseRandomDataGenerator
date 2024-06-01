import mongoose from "mongoose";
import express from 'express'
import { RandomN } from './models/Random.js'
const app = express()
const PORT = 3000;
const url = 'mongodb://127.0.0.1:27017/Random';
const conn= await mongoose.connect(url);

function generateRandom() {
    const names = ['Atul', 'Chris', 'Hardik'];
    const salary = [1, 2, 3];
    const language= ['English', 'Hindi', 'Chinese'];
    const city = ['Lucknow', 'Seattle', 'Dallas'];
    const isManager = [true, false];

    const y = Math.floor(Math.random() * 3);
    const z = Math.floor(Math.random() * 2);
    return ({
        name: names[y],
        salary: salary[y],
        language: language[y],
        city: city[y],
        isManager: isManager[z],
    })
}

app.get('/', async(req, res) => {
    for (let i = 0; i < 10; i++) {
        const randomData = generateRandom();
        const x = new RandomN(randomData);
        await x.save();
    }
    res.send("Hello Bro!");
});

app.listen(PORT, () => {
    console.log(`Server is running on the ${PORT}`);
})

