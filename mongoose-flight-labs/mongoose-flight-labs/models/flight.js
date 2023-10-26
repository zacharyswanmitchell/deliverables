const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ["ATL", "DFW", "DEN", "LAX", "SAN", "TPA", "SJO", "REK"],
      required: true,
    },
    arrival: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["Delta", "Copa", "PanAm", "Southwest", "United"],
    },
    airport: {
      type: String,
      enum: ["ATL", "DFW", "DEN", "LAX", "SAN", "TPA", "SJO", "REK"],
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999,
      required: true,
    },
    departs: {
      type: Date,
      default: () => {
        const oneYear = new Date();
        oneYear.setFullYear(oneYear.getFullYear() + 1);
        return oneYear;
      },
      required: true,
    },
    destinations: [destinationSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
