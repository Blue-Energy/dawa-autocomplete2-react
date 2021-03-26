import React, { Component } from 'react'

import DawaAutocomplete2 from 'dawa-autocomplete2-react'
import { timeStamp } from 'console'


interface AppProps {
}

interface AppState {
  value?: string;
}


export default class App extends Component<AppProps, AppState> {

  constructor(props: any){
    super(props)
    this.state = {
      value: 'Lyngbyvej'
    }

  }
  render () {


    let textValue = ''

    if(this.state.value != undefined){
      textValue = this.state.value
    }
    return (
      <DawaAutocomplete2 
      select={(selected) => {
        console.log(selected)
          this.setState({
            value: selected.tekst
          })
      }}
      value={textValue}
      classes={{
        root: 'root',
        input: 'input',
        ul: 'ul',
        li: 'li',
        selected: 'selected'        
      }}
      id={"0a3f50a6-4a4c-32b8-e044-0003ba298018"}
      />
    )
  }
}
