import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { test: 'foo' }
    }
    render() {
        return (
            <div>Results</div>

        )
    }
}

export default Header