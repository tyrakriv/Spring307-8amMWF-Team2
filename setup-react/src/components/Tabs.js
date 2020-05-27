import React from 'react';
import {Button, Form, Label} from 'reactstrap';

function Tabs() {
  return (
    <Form>
      <div>
      <h2 className="text-right"><Button href="/">Signout</Button></h2>
        <h1 style = {{
          top: 20
          //textAlign: "left"
        }}>Mindify</h1>

        <nav>
            <Button variant="primary" size="lg" href="/profile">Profile</Button>
            <h6></h6>
            <Button variant="primary" size="lg" href="/homepage">Home</Button>
            <h6></h6>
            <Button variant="primary" size="lg" href="/journal">Journal</Button>
            <h6></h6>
            <Button variant="primary" size="lg" href="/survey">Survey</Button>      
        </nav>
      </div>
    </Form>
  )
}

export default Tabs