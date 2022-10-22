// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../lib/db";

export default async function handler(req, res) {

  try{
    await dbConnect();
  }catch{
    console.log('ไม่สามารถเชื่อมต่อได้');
  }
  res.status(200).json({ name: 'John Doe' })
}
