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
        }
    })
    .catch(error => console.log("Error in removing Journal Entry: ", error))
}

const Entry = ({entry}) => {
    return (
        <div className="journal-entry">
            <h1>{entry.title}</h1>
            <h3>{entry.date_created}</h3>
            <p>{entry.body}</p>
            <div>    
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
                <Button onClick={() => removeEntry(entry.title)} className="btn-dark text-right">
                    delete 
                </Button>
            </div>
            <hr style={{color: '#000000',
                        backgroundColor: '#000000',
                        height:0.9}}/>
        </div>
    )
}

const Entries = ({ entries }) => {
    const sorted_entries = entries.sort(function(a, b){
        return new Date(b.date_created) - new Date(a.date_created);
    });
    return (
        <List>
            {sorted_entries.map(entry => 
                <Entry entry={entry}/>
            )}
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
            <div>
                <div className="section-title">
                    <h1>Journals: </h1>
                </div>
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
                }><Button className="newjournal-btn"> New Journal </Button>
                </Link>
                <div className="journal-list">
                    <Entries  entries={entries}/>
                </div>
                    
            </div>
            
        </div>
    )
}

export default Journal