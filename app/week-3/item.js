export default function Item({ name, quantity, category }) {
    return (
      <li className="p-4 border rounded-lg shadow-sm mb-2 bg-white">
        <span className="font-bold">{name}</span>
        <span className="text-gray-600"> ({quantity})</span>
        <span className="text-sm text-gray-500"> - {category}</span>
      </li>
    );
  }