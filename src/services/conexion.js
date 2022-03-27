import mongoose from 'mongoose'
//import { ACCES_MONGO } from '../../config/envs.js'



//const ACCESDB = ACCES_MONGO.dev
const ACCESDB = process.env

export const main = () => {
  return mongoose.connect(`mongodb://${ACCESDB.USER_NAME}:${ACCESDB.DATA_BASE_PASSWORD}@${ACCESDB.HOST}:27017/${ACCESDB.DATA_BASE_NAME}`);
}