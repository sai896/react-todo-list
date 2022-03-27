import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


import './App.css';
import { Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';



const App = () => {
  const [newItem, setNewItem] = useState("")
  const [allItems, setItems] = useState([])

  const OnchangeNewItem = (e) => {
    setNewItem(e.target.value)
  }

  const OnClickAdd = (e) => {
    if (newItem) {
      setItems((old) => [...old, newItem])
      setNewItem("")
    }
  }
  const OnRemove = (ind) => {
    // const ind = e.target.id
    setItems((old) => {
      console.log(old, ind)
      let a = old.filter((ite, inde) => inde !== ind)
      console.log("aaaa", a)
      return a
    })

  }

  return (
    <>
      <div className='h1--div'>
        <h1>React todo list app</h1>
      </div>

      <div className='main--div'>


        <Container className="main--container" fluid>



          <Row className="main--row">
            <Col className="main--col"><Form.Control type="text" onChange={OnchangeNewItem} value={newItem} placeholder="enter new item" /></Col>
            <Col className="main--col"><Button variant="outline-primary" size="sm" className="main--btn" onClick={OnClickAdd}>Add Item</Button></Col>
          </Row>


          {allItems.map((item, ind) => {
            return <Row key={ind} className="main--row" style={{ background: '#0000ff70' }}>
              <Col className="main--col">{item}</Col>
              <Col className="main--col"><Button variant="outline-danger" className="main--btn" size="sm" onClick={() => OnRemove(ind)}>Remove</Button></Col>

            </Row>
          })}

        </Container>
      </div >
    </>

  );
}

export default App;
