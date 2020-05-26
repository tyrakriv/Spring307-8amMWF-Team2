import React from 'react';
import {Button, Form, Label} from 'reactstrap';

function Tabs() {
  return (
    <Form className="tabs">
      <div>
      <h2 className="text-right"><Button href="/">Signout</Button></h2>
        <h1 style = {{
          paddingTop: 30,
          paddingLeft: 0,
          textAlign: "left"
        }}>Mindify</h1>

        <nav>
            <Button href="/profile">Profile</Button>
            <h6></h6>
            <Button href="/homepage">Home</Button>
            <h6></h6>
            <Button href="/journal">Journal</Button>
            <h6></h6>
            <Button href="/survey">Survey</Button>
            <h6></h6>         
        </nav>
      </div>
    </Form>
  )
}

export default Tabs
