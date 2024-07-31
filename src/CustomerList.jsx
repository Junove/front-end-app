const CustomerList = (props) => {
  return (
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
                props.customers.map((customer) => (
                    <tr style={{fontWeight:props.formData.id==customer.id?'bold':'normal'}} key={customer.id} onClick={()=>props.handleListClick(customer)}>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.password}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
  )
};

export default CustomerList