const mongoose = require("mongoose");

const userRegisterSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true, trim: true },
    lname: { type: String, required: true, trim: true },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "TransGender"],
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
