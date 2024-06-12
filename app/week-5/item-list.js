import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const [groupedView, setGroupedView] = useState(false); 
  // Function to prepare grouped data
  const prepareGroupedItems = () => {
    const groupedItems = items.reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      } 
      acc[category].push(item);
      return acc;
    }, {});

    const sortedCategories = Object.keys(groupedItems).sort();
 
    sortedCategories.forEach(category => {
      groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
    });

    return { groupedItems, sortedCategories };
  };


  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });


  const toggleGroupedView = () => {
    setGroupedView(!groupedView);
  };

 
  const renderGroupedItems = () => {
    const { groupedItems, sortedCategories } = prepareGroupedItems();
    return sortedCategories.map(category => (
      <div key={category} className="mb-4">
        <h2 className="text-xl font-semibold capitalize mb-2">{category}</h2>
        <ul className="divide-y divide-gray-200">
          {groupedItems[category].map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Sort and Group buttons */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 mx-2 rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 mx-2 rounded ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={toggleGroupedView}
          className={`px-4 py-2 mx-2 rounded ${groupedView ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {groupedView ? 'Show All' : 'Group by Category'}
        </button>
      </div>

      {/* Item list or grouped items */}
      {groupedView ? renderGroupedItems() : (
        <ul className="divide-y divide-gray-200">
          {sortedItems.map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
