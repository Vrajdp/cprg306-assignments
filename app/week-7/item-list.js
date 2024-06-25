"use client";

import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  return (
    <div>
      <ul className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
        {items.map((item) => (
          <Item key={item.id} item={item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
