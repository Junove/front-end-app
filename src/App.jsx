import './App.css'

function App() {
  let customers = [
    {"name":"Name1", "email":"email1@gmail.com", "password":"mypassword1"},
    {"name":"Name2", "email":"email2@gmail.com", "password":"mypassword2"},
    {"name":"Name3", "email":"email3@gmail.com", "password":"mypassword3"}
  ];

  function onDeleteClick(e) {
    e.preventDefault();
    console.log("onDeleteClick");
  }

  function onSaveClick(e) {
    e.preventDefault();
    console.log("onSaveClick");
  }

  function onCancelClick(e) {
    e.preventDefault();
    console.log("onCancelClick");
  }

  function handleListClick() {
    console.log("handleListClick");
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
                  <tr onClick={()=>handleListClick()}>
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
              <caption>Add</caption>
              <tbody>
                <tr>
                  <td><label for="name">Name:</label></td>
                  <td><input type="text" id="name" name="name"></input></td>
                </tr>
                <tr>
                  <td><label tor="email">Email:</label></td>
                  <td><input type="text" id="email" name="email"></input></td>
                </tr>
                <tr>
                  <td><label tor="password">Password:</label></td>
                  <td><input type="text" id="password" name="password"></input></td>
                </tr>
              </tbody>
            </table>
          <div id="command_buttons">
            <button onClick={(e)=>onDeleteClick(e)}>Delete</button>
            <button onClick={(e)=>onSaveClick(e)}>Save</button>
            <button onClick={(e)=>onCancelClick(e)}>Cancel</button>
          </div>
        </form>
        </div>
      </div>
    </>
  )
}

export default App
