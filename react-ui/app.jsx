import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Header from './components/header'
import Example from './components/example'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {test: 'foo'}
    }
    render(){
        return (
            <BrowserRouter> 
            <div>
                <Header/>
                <Example/>
            </div>
           </BrowserRouter>
        )
    }
}

export default App