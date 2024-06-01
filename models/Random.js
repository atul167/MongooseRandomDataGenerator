import mongoose from 'mongoose';
const { Schema } = mongoose;

const RandomSchema = new Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager :Boolean,
});

export const RandomN = mongoose.model('RandomN', RandomSchema);