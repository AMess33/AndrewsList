const { Product } = require("../models");

const productData = [
  {
    name: "Timber Ridge Cocoa Oak",
    description: "3/4 x 2-1/4 inch solid hardwood flooring.",
    price: 3.56,
    availablity: true,
    category_id: 1,
    filename: "images/timber-ridge-cocoa-oak",
  },
  {
    name: "Brazilian Pecan",
    description: "5/8 x  x 3-1/2 inch solid hardwood flooring.",
    price: 2.38,
    availablity: true,
    category_id: 1,
    filename: "images/brazilian-pecan",
  },
  {
    name: "Great Lakes Hand Sculpted Maple",
    description: "3/8 x 5-3/8 inch solid hardwood flooring.",
    price: 3.2,
    availablity: true,
    category_id: 1,
    filename: "images/great-lakes-maple",
  },
  {
    name: "CustomCraft Countertops High Resolution Laminate Countertop",
    description:
      "4 foot total length, unfinished ends.  Fits 24 inch deep cabinets.",
    price: 62.29,
    availablity: true,
    category_id: 2,
    filename: "images/laminate-countertop",
  },
  {
    name: "Butcher Block Birch Countertops",
    description:
      "25 inch width, 48 inch length,  1.5 inch thick. Solid hardwood.  Other sizes available.",
    price: 106.79,
    availablity: true,
    category_id: 2,
    filename: "images/butcher-block-countertop",
  },
  {
    name: "Kitchen Wall Cabinet",
    description:
      "12 inch width x 30 inch height. Other sizes available, in a variety of wood species.",
    price: 48.94,
    availablity: true,
    category_id: 3,
    filename: "images/kitchen-wall-cabinet",
  },
  {
    name: "Great Lakes Hand Sculpted Maple",
    description:
      "30 inch width x 12 inch height. Other sizes available, in a variety of wood species.",
    price: 64.97,
    availablity: true,
    category_id: 3,
    filename: "images/over-appliance-cabinet",
  },
];

module.exports = productData;
