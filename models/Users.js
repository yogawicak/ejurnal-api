const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../connectiondb')

const UserSchema = new Schema({
    username:{ type:String, unique:true, required:true },
    email:{ type:String, unique:true },
    password:{ type:String },
    fullname:{ type:String, },
    roles:{ type:String, enum:['Siswa', 'PengawasIndustri', 'GuruPembimbing'] },
});

const User = db.model('User',UserSchema)

module.exports = {
    User,UserSchema
}