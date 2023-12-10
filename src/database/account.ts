import { timeStamp } from "console";
import mongoose from "mongoose";

const accountScheme = new mongoose.Schema({
    uid: String,
    name: String,
    pin: String
}, {timestamps: true});

const Account = mongoose.models.Account || mongoose.model("Account", accountScheme);

export default Account;