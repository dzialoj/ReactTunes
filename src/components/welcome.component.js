import React from 'react'
import {Redirect} from 'react-router-dom'
import Header from './header.component'
import Footer from './footer.component'

class Welcome extends React.Component {
    constructor(){
        super()
        this.redirectJoin = this.redirectJoin.bind(this)
        this.redirectCreate = this.redirectCreate.bind(this)
    }
    redirectJoin(){
        this.props.history.push('/join')
    }
    redirectCreate(){
        this.props.history.push('/create')
    }
    render() {
        return (
            <div>
                <Header></Header>
                <div className="welcome-screen-info">
                    <h3>Welcome to Tunes!</h3>
                    <p>Party music application</p>
                </div>
                <div>
                    <h3>Join a room</h3>
                    <button onClick={this.redirectJoin}>Join!</button>
                </div>
                <div>
                    <h3>Create a new room</h3>
                    <button onClick={this.redirectCreate}>Create!</button>
                </div>
                <Footer></Footer>
            </div>
        )
    }
} export default Welcome