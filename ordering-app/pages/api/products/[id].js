import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
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
    try {
      const product = await Product.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    try {
      const product = await Product.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
