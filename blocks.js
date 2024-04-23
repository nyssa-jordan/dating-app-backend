import mongoose from 'mongoose'
const blockSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})
export default mongoose.model('blocks', blockSchema)