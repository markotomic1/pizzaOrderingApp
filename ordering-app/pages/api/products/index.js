import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const allProducts = await Product.find();
      return res.status(200).json(allProducts);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
