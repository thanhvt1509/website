import Category from "../models/category";
import Product from "../models/product";
import { productSchema } from "../schemas/product";

export const getAll = async (req, res) => {
  // req.query._sort => price
  const {
    _page = 1,
    _limit = 10,
    _sort = "createAt",
    _order = "asc",
  } = req.query;
  const optinos = {
    page: _page,
    limit: _limit,
    sort: {
      [_sort]: _order === "desc" ? "-1" : "1",
    },
  };
  try {
    const { docs: products } = await Product.paginate({}, optinos);
    if (!products) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const get = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "categoryId",
      "products"
    );
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json({
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const create = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      res.json({
        message: error.details[0].message,
      });
    }
    const product = await Product.create(req.body);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    await Category.findByIdAndUpdate(product.categoryId, {
      $addToSet: {
        products: product._id,
      },
    });
    return res.status(200).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({
      message: "Product delete successfully",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const update = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      res.json({
        message: error.details[0].message,
      });
    }
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

// const myName = "ahihi";

// const myInfo = {
//     [myName]: "Dat",
// };

// myInfo.ahihi;
