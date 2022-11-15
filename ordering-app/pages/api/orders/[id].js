import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();
  if (method === "GET") {
    try {
      const order = await Order.findById(id);

      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.status(201).json(order);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    try {
      await Order.findByIdAndDelete(id);
      return res.status(201).json("successfully deleted");
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};

export default handler;
