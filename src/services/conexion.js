import mongoose from 'mongoose'
import { ACCES_MONGO } from '../../config/envs.js'
const ACCESDB = ACCES_MONGO.dev

export const main = async () => {
  await mongoose.connect(`mongodb://${ACCESDB.USER_NAME}:${ACCESDB.PASSWORD}@${ACCESDB.HOST}:27017/${ACCESDB.DATA_BASE_NAME}`);
}