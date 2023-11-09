import mongoose from "mongoose";
import validator from "validator";

export const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "The first name is required!"],
    trim: true,
    minLength: 4,
    maxLength: 16,
  },
  lastName: {
    type: String,
    required: [true, "The last name is required!"],
    trim: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: [true, "The email is required!"],
    validate: [validator.isEmail, "Email is not valid!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "The password is required!"],
    minLength: 4,
  },
});
