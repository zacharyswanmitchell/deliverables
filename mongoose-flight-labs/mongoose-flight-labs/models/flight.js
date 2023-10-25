const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["delta", "copa", "panam", "southwest", "united"],
    },
    airport: {
      type: String,
      enum: ["tpa", "sjo", "rek", "den", "lax"],
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999,
    },
    departs: {
      type: Date,
      default: function () {
        return new Date().getDate;
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
