const mongoose = require('mongoose')

const connectionstring = 'mongodb+srv://yogawicak:Yogablpn26@yogs-mongo-bgt22.gcp.mongodb.net/ejurnal?retryWrites=true&w=majority'
mongoose.connect(connectionstring,{useNewUrlParser: true,useUnifiedTopology: true},(err) => {
        if (err){
            throw err
        } else {
            console.log('Successfully Create DB Connect')
        }
        })

module.exports = mongoose
