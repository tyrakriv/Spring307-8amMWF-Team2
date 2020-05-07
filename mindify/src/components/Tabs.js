import React, { Component } from 'react'

export class Tabs extends Component {
    state = {
        tabs: [
          {
            id: 1,
            title: 'Profile',
            count: 0
          },
          {
            id: 2,
            title: 'Home',
            count: 10
          },
          {
            id: 3,
            title: 'Journal',
            count: 20
          },
          {
            id: 4,
            title: 'Survey',
            count: 30
          },
          {
            id: 5,
            title: 'TODO',
            count: 40
          }
        ]
    }
    render() {
        return this.state.tabs.map((tabs) => (
            <h2 style = {{
                color: 'blue',
                paddingLeft: 30,
                lineHeight: 1.7,
                position: 'absolute',
                top: 100 + tabs.count*4.5
            }}>{tabs.title}</h2>
        ));
    }
}

export default Tabs;
