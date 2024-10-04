import React, { useState, useEffect } from "react";

function MenuForm({ onAdd, onEdit, editingItem }) {
  const [formData, setFormData] = useState({ label: "", link: "" });

  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem);
    }
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      onEdit(formData);
    } else {
      onAdd(formData);
    }
    setFormData({ label: "", link: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="label"
        value={formData.label}
        onChange={handleChange}
        placeholder="Menu Label"
        required
      />
      <input
        type="text"
        name="link"
        value={formData.link}
        onChange={handleChange}
        placeholder="Menu Link"
        required
      />
      <button type="submit">{editingItem ? "Update" : "Add"}</button>
    </form>
  );
}

export default MenuForm;
