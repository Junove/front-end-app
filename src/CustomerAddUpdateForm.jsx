const CustomerAddUpdateForm = (props)=> {
    return (
        <div>
        <form className="container">
          <table>
            <caption>{props.mode}</caption>
            <tbody>
              <tr>
                <td><label for="name">Name:</label></td>
                <td><input type="text" id="name" name="name" onChange={props.handleFormUpdate} value={props.formData.name} placeholder="Customer Name"></input></td>
              </tr>
              <tr>
                <td><label tor="email">Email:</label></td>
                <td><input type="text" id="email" name="email" onChange={props.handleFormUpdate} value={props.formData.email} placeholder="Customer Email"></input></td>
              </tr>
              <tr>
                <td><label tor="password">Password:</label></td>
                <td><input type="text" id="password" name="password" onChange={props.handleFormUpdate} value={props.formData.password} placeholder="Customer Password"></input></td>
              </tr>
            </tbody>
          </table>
          <div id="command_buttons">
            <button onClick={props.onDeleteClick}>Delete</button>
            <button onClick={props.onSaveClick}>Save</button>
            <button onClick={props.onCancelClick}>Cancel</button>
          </div>
        </form>
      </div>
    )
};

export default CustomerAddUpdateForm