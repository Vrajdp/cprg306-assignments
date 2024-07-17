import { useUserAuth } from "../_utils/auth-context";
import { useState, useEffect } from "react";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";

const ShoppingList = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 1, category: 'produce' });

  const loadItems = async () => {
    if (user) {
      const items = await getItems(user.uid);
      setItems(items);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async () => {
    if (user) {
      const itemId = await addItem(user.uid, newItem);
      setItems([...items, { ...newItem, id: itemId }]);
      setNewItem({ name: '', quantity: 1, category: 'produce' });
    }
  };

  const handleDeleteItem = async (itemId) => {
    if (user) {
      await deleteItem(user.uid, itemId);
      setItems(items.filter(item => item.id !== itemId));
    }
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} - {item.category}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        placeholder="Item Name"
      />
      <input
        type="number"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value, 10) })}
        placeholder="Quantity"
      />
      <select
        value={newItem.category}
        onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ShoppingList;
