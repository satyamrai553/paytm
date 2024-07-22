const mongoose = require('mongoose');

;(async()=>{
    const response = await mongoose.connect('mongodb+srv://satyamrai550:9058441867@cluster0.y0kqeop.mongodb.net/paytm')
    console.log("mongodb Connected")
})();

const userSchema =new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
    },
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{timestamp: true})
    



const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);


module.exports = {
	User,
  Account,
};