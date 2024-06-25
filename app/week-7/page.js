"use client";
import React, { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json'; // Assuming items.json is in the same directory

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  useEffect(() => {
    // Simulate fetching items from items.json (replace with actual fetch logic if needed)
    setItems(itemsData);
  }, []);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item) => {
    const cleanName = item.name.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    setSelectedItemName(cleanName);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <NewItem onAddItem={addItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-full md:w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}
