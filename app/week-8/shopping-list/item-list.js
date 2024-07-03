import React from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  return (
    <ul className="bg-white shadow-md rounded-lg overflow-hidden">
      {items.map(item => (
        <Item key={item.name} item={item} onSelect={onItemSelect} />
      ))}
    </ul>
  );
}
