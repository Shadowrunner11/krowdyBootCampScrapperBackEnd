import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
    fullName: String,
    education: [{institution: String, description: String}],
    //experience: [{institution:String, rol: String, location:String, date:Date }]
})

export const Person = mongoose.model('Person', PersonSchema)