import React, { useEffect, useState } from 'react';
import Tabs from './Tabs';
import { List, Header, Container} from 'semantic-ui-react';
import { Button } from 'reactstrap';
import {Link, Redirect} from "react-router-dom";

const removeEntry = async (entry_title) => {
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
            window.location.reload(false);
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
    console.log(entries);
    const sorted_entries = entries.sort(function(a, b){
        return new Date(b.date_created) - new Date(a.date_created);
    });
    console.log(sorted_entries);
    return (
        <List>
            {sorted_entries.map(entry => {
                return (
                    <List.Item key={entry.title}>
                        <Header>{entry.title} </Header>
                        <h3> {entry.body} </h3>
                        <h2> {entry.date_created} </h2>
                        <Link styel={{right : 150}} to={
                            {
                                pathname: '/journal/entry',
                                state: {
                                    title: entry.title, 
                                    body: entry.body,
                                    entry_id: entry.id,
                                    user_id: JSON.parse(window.localStorage.getItem("user")).id
                                }
                            }
                            }><Button className="btn-dark text-right"> edit </Button>
                        </Link>
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
    useEffect(() => {
      fetch('/api/getJournals', {
          method: 'POST',
          headers:{
              'Content-Type': 'text/plain'
          },
          body: user == null? " " : user.username
      }).then(response => 
        response.json().then(data => {
          setEntries(data.journal_entries);
        })
      );
    }, [])
    if (JSON.parse(window.localStorage.getItem("user")) == null) {
        return <Redirect to="/" />;
    }
    return (
        <div>
            <Tabs/>
            <div className="journal-list">
                <h1>Journals: </h1>
                <Link styel={{right : 150}} to={
                    {
                        pathname: '/journal/entry',
                        state: {
                            title: '', 
                            body: '',
                            entry_id: 0,
                            user_id: JSON.parse(window.localStorage.getItem("user")).id
                        }
                    }
                }><Button > New Journal </Button>
                </Link>
                <Entries entries={entries}/>
            </div>
            
        </div>
    )
}

export default Journal