import React from 'react';

export default function Item({ item, onSelect }) {
  return (
    <li
      onClick={() => onSelect(item)}
      className="cursor-pointer p-2 border-b border-gray-300 hover:bg-gray-200"
    >
      {item.name}, {item.quantity} {item.category}
    </li>
  );
}
