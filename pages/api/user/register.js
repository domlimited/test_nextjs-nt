import dbConnect from "../../../lib/db";
import User from "../../../models/user";

export default async function handler(req, res) {
    const { method, body } = req;
    const { name, email, password } = body;

    await dbConnect();

    if (method === "POST") {

        //check อีเมล์ซ้ำ
        const existUser = await User.findOne({ email: email});
        if (existUser) {
            res.status(400).json({message: "มีผู้ใช้งานอีเมล์นี้ในระบบแล้ว กรุณาลองใหม่"});
        }

        const user = new User();
        user.name = name;
        user.email = email;
        user.password = await user.hashPassword(password);
        await user.save();
        res.status(201).json({message: "ลงทะเบียนสำเร็จ"});

    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end("Method Not Allowed");
    }
}
