import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Cat from './components/cat'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {test: 'foo'}
    }
    render(){
        return (
            <BrowserRouter> 
            <div>
                Meow
                <Route path="/cat" component={Cat}/>
            </div>
           </BrowserRouter>
        )
    }
}

export default App