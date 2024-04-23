import mongoose from 'mongoose'
const favoriteSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})
export default mongoose.model('favorites', favoriteSchema)