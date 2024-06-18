import React from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      {sortedItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}
