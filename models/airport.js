const { Schema } = require('mongoose')

const Airport = new Schema(
    {
        airport_id: { type: Schema.Types.ObjectId, ref: 'Airport' },
        airport_name: { type: String, required: true },
        location: { type: String, required: true },
        code: { type: String, required: true }
       },
  { timestamps: true }
)

module.exports = Airport