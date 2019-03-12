import React, { Component } from 'react'

import DawaAutocomplete2 from 'dawa-autocomplete2-react'

export default class App extends Component {
  render () {
    return (
      <DawaAutocomplete2 
      select={(selected) => {
          console.log(selected);
      }}
      classes={{
        root: 'root',
        input: 'input',
        ul: 'ul',
        li: 'li',
        selected: 'selected'
      }}
      />
    )
  }
}
