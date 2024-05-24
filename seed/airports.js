const db = require(`../db`)
const { Airport } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async() => {
    const airports = [
        {
            airport_name: "John F. Kennedy International Airport",
            location: "New York City, New York, USA",
            code: "JFK"
        },
       {
            airport_name: "Heathrow Airport",
            location: "London, United Kingdom",
            code: "LHR"
        },
        {
            airport_name: "T.F. Green International Airport", 
            location: "West Warwick, Rhode Island, USA",
            code: "PVD"
        },
        {
            airport_name: "Dubai International Airport",
            location: "Dubai, United Arab Emirates",
            code: "DXB"
        }
      ]
      await Airport.insertMany(airports)
      console.log(`created airports!`)
}
const run = async () => {
    await main()
    db.close()
  }
  
  run()