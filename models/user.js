import mongoose from "mongoose";
import * as argon2 from "argon2";

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, trim: true, unique: true, index: true },
    password: { type: String, trim: true },
    role: { type: String, default: "member" }
}, {
    collection: "users", // ชื่อ collection (ตาราง) จริงใน db
    timestamps: true
});

userSchema.methods.hashPassword = async function(password) {
    const hash = await argon2.hash(password);
    return hash;
}

userSchema.methods.comparePassword = async function(password) {
    const isValid = await argon2.verify(this.password, password);
    return isValid;
}

export default mongoose.models.User || mongoose.model("User", userSchema);
