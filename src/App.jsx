import { useState,useEffect } from 'react';
import './App.css'
import * as memdb from './memdb.js';

function App() {
  let defaultCustomer = { "id": -1, "name": "", "email": "", "password": "" };
  let [customers, setCustomers] = useState([]);
  let [selectedItem, setSelectedItem] = useState(defaultCustomer);
  let [formData, setFormData] = useState(defaultCustomer);

  const getCustomers = function() {
    setCustomers(memdb.getAll());
  }

  useEffect(() => {getCustomers()});

  function onDeleteClick(event) {
    event.preventDefault();
    console.log("onDeleteClick");
  }

  function onSaveClick(event) {
    event.preventDefault();
    console.log("onSaveClick");
  }

  function onCancelClick(event) {
    event.preventDefault();
    setFormData(defaultCustomer);
  }

  //Reset selected item if already selected, otherwise update form data
  function handleListClick(customer) {
    if(formData.id == customer.id) setFormData(defaultCustomer);
    else setFormData(customer);
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
        <div className="container">
          <table>
            <caption>Customer List</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Pass</th>
              </tr>
            </thead>
            <tbody>
              {
                customers.map((customer) => (
                  <tr style={{fontWeight:formData.id==customer.id?'bold':'normal'}} key={customer.id} onClick={()=>handleListClick(customer)}>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.password}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div>
          <form className="container">
            <table>
              <caption>{formData.id < 0 ? "Add" : "Update"}</caption>
              <tbody>
                <tr>
                  <td><label for="name">Name:</label></td>
                  <td><input type="text" id="name" name="name" onChange={handleFormUpdate} value={formData.name}></input></td>
                </tr>
                <tr>
                  <td><label tor="email">Email:</label></td>
                  <td><input type="text" id="email" name="email" onChange={handleFormUpdate} value={formData.email}></input></td>
                </tr>
                <tr>
                  <td><label tor="password">Password:</label></td>
                  <td><input type="text" id="password" name="password" onChange={handleFormUpdate} value={formData.password}></input></td>
                </tr>
              </tbody>
            </table>
          <div id="command_buttons">
            <button onClick={onDeleteClick}>Delete</button>
            <button onClick={onSaveClick}>Save</button>
            <button onClick={onCancelClick}>Cancel</button>
          </div>
        </form>
        </div>
      </div>
    </>
  )
}

export default App
