import { useState, useEffect, Component } from 'react';
import React from "react";
import CityList from './CityList';
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {connect} from 'react-redux';
import Child from './Child';
import MultiStepForm from './MultistepForm';

class ExandingRow extends React.Component {
  state = { open: false, active: '', name: '' };

  render() {
    const { row, index } = this.props;
    const { open, active, } = this.state;
     
    const handleCheck = (e) => {
      console.log(e.target.checked);
    }
    const handleName = (e) => {
      console.log("e.target.value",e.target.value);
      this.setState({
        name: e.target.value,
      })
    }
    const handleNames =(value) =>{
      console.log("value",value)
    }


    return (
      <>

        <TableRow key={row.id} key={index} data-index={index} >
          <TableCell>
            <Button
              onClick={() => this.setState(({ open }) => ({ open: !open }))}
            >
              Extend / Collapse
            </Button>
          </TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
          <TableCell align="right"><input type="checkbox" value="bike" onClick={handleCheck} /></TableCell>
        </TableRow>
        <Collapse in={open} component="tr" style={{ display: "block" }}>
          <td>
            <div>Expanded data.</div>
            <input type="input"  name="lname" id="lname" onChange={handleName}></input>
            <button type="button" onClick={()=>handleNames(this.state.name)}>Submit</button>
          </td>
        </Collapse>
      </>
    );
  }
}
class CheckBoxComp extends React.Component{

    state={
      checkFalse:false
    }

  render(){
    const {item, checkedAll}=this.props;
    const {checkFalse}=this.state
    const handleClick = (value) => {
   
      this.setState({
        checkFalse: !checkFalse,
      }) 
     }
    return(
      <>
       {/* CALL CHILD METHOD FROM PARENT EVENT */}
       <div>
        <Child ref={instance => {this.child = instance; }} />
        <button onClick= {() => { this.child.getAlert(); }}>Click to call Child method from parent in class Component</button>
      </div>
  <input type="checkbox" class="form-check-input" id="exampleCheck10" checked={this.state.checkFalse || checkedAll} onClick={() => handleClick(item)}></input>
      </>
    )
  }
}

function App({ctr, onIncrementCounter, onDecrementCounter, onAddEightCounter,props}) {
  const [active, setActive] = useState(1);
  const [bluecolor, setbluecolor] = useState('');
  const [collapse, setCollapse] = useState(false);
  const [checkCount, setCheckCount] = useState([]);
  const [open, setOpen] = useState(false);
  // const [counter, setCounter]=useState(0);
  const [state, setState] = React.useState({
    firstName: "",
    lastName: ""
  })
  const [checkFalse, setCheckFalse] = useState(false)
  const data = [
    { name: "Hemant", id: 0, checked: false, },
    { name: "Rahul", id: 1, checked: false, },
    { name: "Mausam", id: 2, checked: false, },
  ];



  const handleCollapse = () => {
    setOpen(!open);
    alert(open)
  }
  const rows = [
    { id: 1, name: "Frozen yoghurt", checked:"false" },
    { id: 2, name: "Frozen yoghurt",checked:"false" },
    { id: 3, name: "Frozen yoghurt", checked:"false" },
    { id: 4, name: "Frozen yoghurt", checked:"false" },
  ];
  const [rowsdata,setRowdata]=useState(rows);
  const handler = (e) => {
    setActive(e);
  }
  const handleAll = () =>{
    alert(1)
  rows.map(items=>(
    items.checked=true,
    setRowdata(rows),
    setCheckFalse(!checkFalse)
  ))
  console.log(rows)
  
  }
  const handleColor = () => {
    setbluecolor("blue")
  }

  useEffect(() => {
  })
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th onClick={handleColor} style={{ color: bluecolor }}>Order Number</th>
            <th>Order Date</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <>
              <div key={index} data-index={index} onClick={() => handler(row.id)} className={active == row.id ? 'active' : 'notactive'}>{row.name}</div>
              <ExandingRow row={row} index={index} />
            </>
          ))}
        </tbody>
      </table>

      <div><CityList /></div>
      <h2>{checkCount.length}item selected</h2>
      <h1 onClick={handleAll}>Select ALL</h1>
      {
        data.map(item => (
          <>
            <div style={{ display: "flex" }}>
              <CheckBoxComp item={item} checkedAll={checkFalse}/>
            
              <label class="form-check-label" for="exampleCheck1">{item.name} and id={item.id}</label>
            </div>
          </>
        ))
      }

      {/* Form In Reactjs */}

      <div>
        <h1>Any place in your app!</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="row">
              <div  className="col name offset-md-4">
              <Field name="email"/>
              <ErrorMessage name="email" component="div" />
              </div>
              <div className="col name offset-md-4">
              <Field type="password" name="password" className="pass"/>
              <ErrorMessage name="password" component="div" />
              </div>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
           </button>
            </Form>
          )}
        </Formik>
      </div>

      <div>
        <input type="checkbox" checked={true}></input>
      </div>

      <div className="row">
        <div className="col-md-4">.col-md-4</div>
        <div className="col-md-4 offset-sm-2">.col-md-4</div>
      </div>

      {/* REDUX EXAMPLE*/}
      <h4>{ ctr}</h4> 
      <Button type="button" onClick={onIncrementCounter }>Increment</Button>
      <Button type="button"  onClick={onDecrementCounter }>Decrement</Button>
      <Button type="button"  onClick={onAddEightCounter }>Add 10</Button>
      
      <h1>MULTI STEP FORM</h1>
      <MultiStepForm />
   
    </>
  );
}



const mapStateToProps = state => {
  console.log("state",state)
  return {
    ctr: state.counter 
  } 
}
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT', value: 1}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT', value: 1}),
    onAddEightCounter: () => dispatch({type: 'ADDEIGHT', value: 8})
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
