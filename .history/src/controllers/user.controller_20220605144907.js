const userSchema = require('../models/User');

const createUser = (req, res) => {
    try {
        let data = {...req.body};

        let user = new 
    } catch (error) {
        console.log(error);
    }
};

const getUser = (req, res) => {
    //getUser api logic here
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