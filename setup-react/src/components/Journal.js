import React, { useEffect, useState } from 'react';
import Tabs from './Tabs';
import { List, Header} from 'semantic-ui-react';
import { Button } from 'reactstrap';

const removeEntry = async entry_title => {
    const to_upload = {
        username : JSON.parse(window.localStorage.getItem("user")).username,
        entry_title : entry_title
    };
    const response = await fetch('/api/removeJournal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(to_upload)
    })
    .then(response => {
        if (response.ok) {
            console.log("Successfully Removed");
        }
    })
    .catch(error => console.log("Error in removing Journal Entry: ", error))
    // this.setState({
    //     entries: entries.filter ((entry, i) => {
    //         return i != index
    //     })
    // })
}

const Entries = ({ entries }) => {
    return (
        <List>
            {entries.map(entry => {
                return (
                    <List.Item key={entry.title}>
                        <Header>{entry.title} </Header>
                        <h2> {entry.date_created} </h2>
                        <Button className="btn-dark text-right"> edit </Button>
                        <Button onClick={() => removeEntry(entry.title)} className="btn-dark text-right"> delete </Button>
                    </List.Item>
                )
            })}
        </List>
    )
}

function Journal() {
    const [entries, setEntries] = useState([]);
    const check = true;
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user.username);
    useEffect(() => {
      fetch('/api/getJournals', {
          method: 'POST',
          headers:{
              'Content-Type': 'text/plain'
          },
          body: user.username
      }).then(response => 
        response.json().then(data => {
          setEntries(data.journal_entries);
        })
      );
    }, [])
    return (
        <div>
            <Tabs/>
            <h1 style={{
                  top: 380
                }}className="text-right">Journal page</h1>

            <Entries entries={entries} />
        </div>
    )
}

export default Journal