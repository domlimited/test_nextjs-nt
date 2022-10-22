import dbConnect from "../../../lib/db";
import User from "../../../models/user";

export default async function handler(req, res) {
    await dbConnect();
    const user = await User.find().select("-password").sort("name");
    res.status(200).json(user);
}