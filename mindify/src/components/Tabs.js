import React from 'react';
import {Button, Form, Label} from 'reactstrap';

function Tabs() {
  return (
    <Form className="tabs">
      <div>
        <h1 style = {{
          paddingTop: 30,
          paddingLeft: 30,
          textAlign: "left"
        }}>Mindify</h1>

        <nav>
          <ul>
            <li><a href="/Profile">Profile</a></li>
            <li><Button href="/Homepage">Home</Button></li>
            <li><a href="/Journal">Journal</a></li>
            <li><a href="/Survey">Survey</a></li>
            <li><a href="/Todo">TODO</a></li>
          </ul>
          <h2><a href="/Loginpage">Signout</a></h2>
        </nav>
      </div>
    </Form>
  )
}

export default Tabs