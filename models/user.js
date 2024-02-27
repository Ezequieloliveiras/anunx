import mongoose, { Schema, models } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
},
    { timestamps: true },
)

const User = models.User || mongoose.model("User", userSchema) // isso quer dizer que se nao exister um Schema crie um igual ao de cima
export default User