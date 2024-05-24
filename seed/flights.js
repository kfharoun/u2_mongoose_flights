const db = require(`../db`)
const { Airport, Flight } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async() => {
    const JFK = await Airport.find({airport_name: "John F. Kennedy International Airport"})
    const LHR = await Airport.find({airport_name: "Heathrow Airport"}) 
    const PVD = await Airport.find({airport_name: "T.F. Green International Airport"})
    const DXB = await Airport.find({airport_name: "Dubai International Airport"})
    
    

    const flights = [
        {
            departingAirport: JFK[0]._id,
            arrivalAirport: LHR[0]._id,
            flightNumber: 123,
            price: 500,
            numberOfSeats: 200,
            airline: "Delta Air Lines",
            departingAirport: "JFK",
            departureDate: new Date("2024-06-01T06:00:00.000Z")
        },
        {
            departingAirport: LHR[0]._id,
            arrivalAirport: JFK[0]._id,
            flightNumber: 124,
            price: 500,
            numberOfSeats: 200,
            airline: "British Airways",
            departingAirport: "LHR",
            departureDate: new Date("2024-06-02T12:00:00.000Z")
        },
        {
            departingAirport: JFK[0]._id,
            arrivalAirport: DXB[0]._id,
            flightNumber: 125,
            price: 800,
            numberOfSeats: 300,
            airline: "Emirates",
            departingAirport: "JFK",
            departureDate: new Date("2024-06-03T13:00:00.000Z")
        },
        {
            departingAirport: PVD[0]._id,
            arrivalAirport: JFK[0]._id,
            flightNumber: 126,
            price: 800,
            numberOfSeats: 300,
            airline: "Southwest Airlines",
            departingAirport: "DXB",
            departureDate: new Date("2024-06-04T14:00:00.000Z")
        },
        {
            departingAirport: JFK[0]._id,
            arrivalAirport: DXB[0]._id,
            flightNumber: 127,
            price: 600,
            numberOfSeats: 250,
            airline: "Air Canada",
            departingAirport: "JFK",
            departureDate: new Date("2024-06-05T15:00:00.000Z")
        },
        {
            departingAirport: DXB[0]._id,
            arrivalAirport: PVD[0]._id,
            flightNumber: 128,
            price: 600,
            numberOfSeats: 250,
            airline: "Delta Air Lines",
            departingAirport: "LAX",
            departureDate: new Date("2024-06-06T08:00:00.000Z")
        },
        {
            departingAirport: LHR[0]._id,
            arrivalAirport: DXB[0]._id,
            flightNumber: 129,
            price: 900,
            numberOfSeats: 350,
            airline: "British Airways",
            departingAirport: "LHR",
            departureDate: new Date("2024-06-07T09:00:00.000Z")
        }
    ]
    
      await Flight.insertMany(flights)
      console.log(`created flights with airports!`)
}
const run = async () => {
    await main()
    db.close()
  }
  
  run()