import type { NextApiRequest, NextApiResponse } from "next";
import admin from "../../lib/firebase/admin";

type Data = {
  reading: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const firestore = admin.firestore();

  if (req.method === "GET") {
    let data = await firestore.collection("reading").doc("ramesh").get();

    res.status(200).json(data.data() as any);
  } else res.status(200).json({ reading: 0 });
}
