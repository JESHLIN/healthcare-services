import React from 'react';

const ServiceItem = ({ service, deleteService, setEditingService }) => {
  return (
    <div className="service-item">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>Price: ${service.price}</p>
      <button onClick={() => setEditingService(service)}>Edit</button>  {/* Set the service to be edited */}
      <button onClick={() => deleteService(service.id)}>Delete</button>  {/* Delete the service */}
    </div>
  );
};

export default ServiceItem;
