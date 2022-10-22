import dbConnect from "../../../lib/db";
import User from "../../../models/user";

export default async function handler(req, res) {
    const { id } = req.query;
    await dbConnect();
    const user = await User.findById(id).select("-password");
    res.status(200).json(user);
}