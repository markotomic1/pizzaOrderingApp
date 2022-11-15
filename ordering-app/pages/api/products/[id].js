import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;
  const token = cookies.token;
  await dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  if (method === "PUT") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("unauthorized");
    }
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("unauthorized");
    }
    try {
      await Product.findByIdAndDelete(id);
      return res.status(200).json("successfully deleted");
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
