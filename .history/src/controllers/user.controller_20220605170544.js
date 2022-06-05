const userSchema = require('../models/User');

const createUser = async (req, res) => {
    try {
        let data = {...req.body};
        let user = new userSchema(data);
        await user.save();
        res.status(200).json({'message':"user created"})
    } catch (error) {
        res.status(401).json({'message': error.message})
    }
};

const getUser = (req, res) => {
    //getUser api logic here
    try {
        let email = 
    } catch (error) {
        
    }
};

const sendMail = (req, res) => {
    //sendMail api logic here
};

const getUserInbox = (req, res) => {
    //getUserInbox api logic here
};

const getUserOutbox = (req, res) => {
    //getUserOutbox api logic here
};

const searchMail = (req, res) => {
    //searchMail api logic here
};

const blockUser = (req, res) => {
    //blockUser api logic here
};

const deleteMail = (req, res) => {
    //deleteMail api logic here
};

const UserController = {
    createUser,
    getUser,
    sendMail,
    getUserInbox,
    getUserOutbox,
    searchMail,
    blockUser,
    deleteMail
};

module.exports = UserController;