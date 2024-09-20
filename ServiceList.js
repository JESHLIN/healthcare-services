import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = ({ services, deleteService, setEditingService }) => {
  return (
    <div>
      <h2>Service List</h2>
      {services.length > 0 ? (
        services.map((service) => (
          <ServiceItem
            key={service.id}
            service={service}
            deleteService={deleteService}
            setEditingService={setEditingService}
          />
        ))
      ) : (
        <p>No services available. Add a new service!</p>
      )}
    </div>
  );
};

export default ServiceList;
