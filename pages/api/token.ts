import { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"



const secret = process.env.JWT_SECRET

export default async (req:NextApiRequest, res:NextApiResponse) => {
  const token = await getToken({ req, secret });
  console.log("JSON Web Token", token);
  //res.send(JSON.stringify(token, undefined, 2));
  res.end();
}