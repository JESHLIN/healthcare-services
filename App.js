import React, { useState } from "react";
import AddServiceForm from "./components/AddServiceForm";
import ServiceList from "./components/ServiceList";
import UpdateServiceForm from "./components/UpdateServiceForm";
import "./styles/App.css"; // Assuming styles are in the correct location

const App = () => {
  const [services, setServices] = useState([]);  // List of services
  const [editingService, setEditingService] = useState(null);  // Track which service is being edited

  // Function to add a new service
  const addService = (service) => {
    setServices([...services, { ...service, id: services.length + 1 }]);
  };

  // Function to delete a service
  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  // Function to update an existing service
  const updateService = (id, updatedService) => {
    setServices(
      services.map((service) =>
        service.id === id ? { ...service, ...updatedService } : service
      )
    );
    setEditingService(null);  // Reset the editing service after updating
  };

  return (
    <div>
      <h1>Healthcare Services Management</h1>

      {/* Show the AddServiceForm if not editing, otherwise show the UpdateServiceForm */}
      {!editingService ? (
        <AddServiceForm addService={addService} />
      ) : (
        <UpdateServiceForm
          service={editingService}
          updateService={updateService}
          setEditingService={setEditingService}
        />
      )}

      <ServiceList
        services={services}
        deleteService={deleteService}
        setEditingService={setEditingService}  // Pass the function to edit the service
      />
    </div>
  );
};

export default App;
