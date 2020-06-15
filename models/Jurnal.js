const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {UserSchema} = require('./Users')
const db = require('../connectiondb')

const JurnalSchema = new Schema({
    judul:{type:String},
    detail:{type:String},
    img_path:{type:String},
    created_by:[UserSchema]
},{timestamps: true})

const Jurnal = db.model('Jurnal', JurnalSchema)


module.exports = Jurnal