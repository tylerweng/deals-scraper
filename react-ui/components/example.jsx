import React from 'react';

class Example extends React.Component {
    constructor(props) {
        super(props)
        this.state = { test: 'foo' }
    }

    componentDidMount() {
        var that = this
        var url = '/api/sephora'

        fetch(url)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            console.log(`data: ${data}`)
            that.setState({test: data})
        })
    }

    // index() {
    //     console.log("hi")
    //     return fetch(`/api/sephora`)
    //         .then(res => {
    //             console.log(`res: ${res}`)
    //             return res.json()
    //         })
    //         .then(data => {
    //             console.log(`data: ${data}`)
    //             const div = document.createElement('div')
    //             div.innerHTML = JSON.stringify(data)
    //             console.log(`div: ${div}`)
    //             console.log(`div.innerHTML: ${div.innerHTML}`)
    //             this.setState({test: div})
    //         })
    //         .catch(err => {
    //             console.log(`err: ${err}`)
    //             this.setState({test: err})
    //         })
    // }
    render() {

        return (
            <div>{this.state.test}</div>
        )
    }
}

export default Example