// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export interface IUser {
  name: string;
  age: number;
  hobbies: string[];
}

export default (req: NextApiRequest, res: NextApiResponse<IUser>) => {
  const hobbies = ["asdas", "asdasd"];
  res.status(200).json({ name: "Michel", age: 37, hobbies });
};
