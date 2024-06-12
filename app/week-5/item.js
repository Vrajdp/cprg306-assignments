"use client";

const Item = ({ name, quantity, category }) => (
  <li className="p-4 hover:bg-gray-50">
    <div className="text-lg font-semibold">{name}</div>
    <div className="text-gray-600">Quantity: {quantity}</div>
    <div className="text-gray-600">Category: {category}</div>
  </li>
);

export default Item;
