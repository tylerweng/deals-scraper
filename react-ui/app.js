import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {test: 'foo'}
    }
    render(){
        return (
            <div>
                Meow
            </div>
        )
    }
}

export default App