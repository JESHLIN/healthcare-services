import React, { useState } from 'react';

const UpdateServiceForm = ({ service, updateService, setEditingService }) => {
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);
  const [price, setPrice] = useState(service.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateService(service.id, { name, description, price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Service</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Service Name"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <button type="submit">Update Service</button>
      <button onClick={() => setEditingService(null)}>Cancel</button> {/* Cancel editing */}
    </form>
  );
};

export default UpdateServiceForm;
