const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//With Mongoose, you would define a Schema object in your application code that maps to a collection in your MongoDB database. 
//The Schema object defines the structure of the documents in your collection
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,

        //The TRIM() function removes the space character OR other specified characters from the start or end of a string.
        // By default, the TRIM() function removes leading and trailing spaces from a string.

        trim: true,
        min: 3,
        max: 20
    },

    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true

    },


    hash_password: {
        type: String,
        required: true,

    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    contactNumber: { type: String },
    profilePicture: { type: String }

},
    {
        timestamps: true
        //Timestamps save the current time of the document created
        // and also when it was updated in form of a Date by turning it true
    }


);
userSchema.virtual('password')
.set(function(password){
    //using npm install --save bcrypt which will do hashing the password 
    this.hash_password =bcrypt.hashSync(password,10);
});

userSchema.methods={
    authenticate: function(password){
        return bcrypt.compareSync(password,this.hash_password);
    }
     
}
 
module.export = mongoose.model('User',userSchema); 