import React from 'react';

class Example extends React.Component {
    constructor(props) {
        super(props)
        this.state = { test: 'foo' }
    }

    render() {
        var url = 'api/sephora'
        const that = this
        fetch(url)
            .then((res) => {

                res.json().then(function (data) {
                    that.setState({ test: JSON.stringify(data) })
                })
            })

        return (
            <div>{this.state.test}</div>
        )
    }
}

export default Example