import React from 'react';

export default function Item({ item }) {
  return (
    <div className="border p-2 mb-2">
      <h2 className="text-lg font-bold">{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </div>
  );
}
