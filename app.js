import React,{Component} from "react";
import Form from "./Form";
import "./form.css"
import Table from "./Table";


class App extends Component{
    constructor(){
        super();
        this.state={
            Username:'',
            Email:'',
            Phone:'',
            data:[]
        }
    };
    handleFormSubmit = (e) => {
        e.preventDefault();
        let data = [...this.state.data];

    data.push({
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone
    });

    this.setState({
      data,
      username: '',
      email: '',
      phone:''
    });
  };
  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;
    this.setState({
        [name]: value
      })
    };
    render() {
        return (
          <div className="App">
            <Form handleFormSubmit={ this.handleFormSubmit } 
              handleInputChange={ this.handleInputChange }
              newUsername={ this.state.username }
              newEmail={ this.state.email }
              newPhone={ this.state.phone } />
              <Table data={ this.state.data }/>
          </div>
        );
      }
    }
    
    export default App;
    
    /*****************************Start Table component*******************/
    import React,{Component} from "react";
import "./form.css";

class Table extends React.Component{
    render(){
        const data=this.props.data;
    return(
        <><table id="mytable">
            <tbody>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone.No</th>
                </tr>
                {data.map(item => {
                return (
                <tr>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
            </tbody>
        </table>
        </>
    );
    }
}
export default Table;
    /*****************************End Table Component***********/
    
    /*******************Start Form Component******************/
    import React,{Component} from "react";

class Form extends React.Component{
    render(){
    return(
        <>
        <div className="form">
        <form onSubmit={this.props.handleFormSubmit}>        
        <input type="text" id="user" value={this.props.newUsername} placeholder="Username" name="username" onChange={this.props.handleInputChange}/>
        <input type="text" id="email" value={this.props.newEmail} placeholder="Email" name="email" onChange={this.props.handleInputChange}/>
        <input type="text" id="phone" value={this.props.newPhone} placeholder="Phone.No" name="phone" onChange={this.props.handleInputChange}/>
        <button type="submit" id="addBtn">Add</button>
        </form>
        </div>
        </>
    );
    }
}
export default Form;
/*******************End Form Component**************/
    
