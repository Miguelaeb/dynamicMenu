import React, { useEffect, useState } from "react";
import menuData from "../data/menuData.json";
import MenuForm from "./MenuForm";

function Navbar() {
  const [menuItems, setMenuItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    // Load menu data from JSON file
    setMenuItems(menuData);
  }, []);

  const handleAdd = (newItem) => {
    setMenuItems([...menuItems, { ...newItem, id: menuItems.length + 1 }]);
  };

  const handleEdit = (updatedItem) => {
    setMenuItems(
      menuItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditingItem(null);
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.label}</a>
              <button onClick={() => setEditingItem(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </nav>
      <MenuForm
        onAdd={handleAdd}
        onEdit={handleEdit}
        editingItem={editingItem}
      />
      <h1>Menú dinámico hecho por Miguel Evangelista - 100387597</h1>
    </div>
  );
}

export default Navbar;
