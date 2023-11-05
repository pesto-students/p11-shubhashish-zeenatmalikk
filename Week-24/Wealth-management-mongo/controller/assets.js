const Asset = require("../models/asset");
const httpStatus = require("http-status-codes");
const createAsset = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { type } = req.body;
    const newAsset = await Asset.create({
      userId,
      type,
    });
    res.status(httpStatus.OK).json({ newAsset, msg: "New asset created" });
  } catch (error) {
    console.log("error", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

const getAssets = async (req, res) => {
  try {
    const userId = req.params.id;
    const assets = Asset.find({ userId });
    res.json(assets);
  } catch (error) {
    console.log("error", error);
  }
};

const updateAsset = async (req, res) => {
  try {
    const assetId = req.params.id;
    const updatedAsset = req.body;
    const asset = await Asset.findByIdAndUpdate(assetId, updatedAsset, {
      new: true,
    });
    if (!asset) {
      return res
        .status(httpStatus.FORBIDDEN)
        .json({ error: "Asset not found" });
    }
    res.json(asset);
  } catch (error) {
    console.log("erro", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};
module.exports = { createAsset, getAssets,updateAsset };
