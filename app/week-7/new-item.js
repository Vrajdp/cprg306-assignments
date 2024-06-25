import React, { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, quantity, category });
    setName('');
    setQuantity('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">
      <div className="mb-2">
        <label className="block text-gray-700">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Quantity</label>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md">Add Item</button>
    </form>
  );
}
