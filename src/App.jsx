import { useState,useEffect } from 'react';
import './App.css'
import * as memdb from './memdb.js';
import CustomerList from './CustomerList.jsx';
import CustomerAddUpdateForm from './CustomerAddUpdateForm.jsx';

function App() {
  let defaultCustomer = { "id": -1, "name": "", "email": "", "password": "" };
  let [customers, setCustomers] = useState([]);
  let [selectedItem, setSelectedItem] = useState(defaultCustomer);
  let [formData, setFormData] = useState(defaultCustomer);
  let mode = formData.id < 0 ? "Add" : "Update";

  useEffect(() => {getCustomers()});

  const getCustomers = function() {
    setCustomers(memdb.getAll());
  }

  function onDeleteClick(event) {
    event.preventDefault();
    //Exit if invalid customer
    if (formData.id < 0) return;

    memdb.deleteById(formData.id);
    setFormData(defaultCustomer);
    
  }

  function onSaveClick(event) {
    event.preventDefault();
    
    if (mode == "Add") {
      memdb.post(formData);
    } else {
      memdb.put(formData.id, formData);
    }
    setFormData(defaultCustomer);
  }

  function onCancelClick(event) {
    event.preventDefault();
    setFormData(defaultCustomer);
  }

  //Reset selected item if already selected, otherwise update form data
  function handleListClick(customer) {
    if(formData.id == customer.id) {
      setFormData(defaultCustomer);
      setSelectedItem(defaultCustomer);
    } else {
      setFormData(customer);
      setSelectedItem(customer);
    }
  }

  //Update form data state based on the form's name attribute
  function handleFormUpdate(event) {
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    });
  }

  return (
    <>
      <h1>React Frontend Application</h1>
      <div id="content">
        <CustomerList customers={customers} handleListClick={handleListClick} mode={mode} formData={formData}/>
        <CustomerAddUpdateForm handleFormUpdate={handleFormUpdate} onDeleteClick={onDeleteClick} onCancelClick={onCancelClick} onSaveClick={onSaveClick} mode={mode} formData={formData}/>
      </div>
    </>
  )
}

export default App
