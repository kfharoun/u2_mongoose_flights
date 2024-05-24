const db = require (`./db`)
const { Airport, Flight } = require(`./models`)

// show flight's airline, airport, flight no., and departure date/time

const flightIndex = async () => {
    const index = await Flight.find({}, [ `flightNumber`, `airline`, `departingAirport`, `departureDate`])
    console.log(index)
}

//find by id
const idSearch = async () => {
        const id = await Flight.findById('664feac08188bdf6fe84b099')
        console.log(id)
}

//create flights 
const createFlight = async () => {
    let newFlight = await Flight.create ({
            flightNumber: 177,
            price: 200,
            numberOfSeats: 200,
            airline: "Southwest Airlines",
            departingAirport: "PVD",
            departureDate: new Date("2024-06-28T15:00:00.000Z")
    })
    console.log(newFlight)
}

// update flight

const updateFlight = async () => {
    const updated = await Flight.updateOne(
        { flightNumber: 177 },
        {$set: {flightNumber: 185}}
    )
    console.log(updated)
}

// delete flight
const deleteFlight = async () => {
    let canceledFlight = await Flight.deleteOne ({ flightNumber: 177 })
    console.log(canceledFlight)
}

async function main () {
    try {
        await flightIndex()
        await idSearch()
        await createFlight()
        await updateFlight()
        await deleteFlight()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close ()
    }
}

main()