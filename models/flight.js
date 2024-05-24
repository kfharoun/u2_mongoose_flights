const { Schema } = require('mongoose')


//creating a new Object called a Publisher, that follows the rules that Mongoose defines through the schema
const Flight = new Schema(
    {
        departingAirport: { type: Schema.Types.ObjectId, ref: 'airport_id' },
        arrivalAirport: { type: Schema.Types.ObjectId, ref: 'airport_id'  },
        flightNumber: { type: Number, required: true },
        price: { type: Number, required: true },
        numberOfSeats: { type: Number, required: true},
        airline: { type: String, required: true },
        departingAirport: { type: String, required: true},
        departureDate: { type: Date, required: true}
    },    
  { timestamps: true }
)

//exporting this thing called a Publisher and all of its information so other files can use it
module.exports = Flight
