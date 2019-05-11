import React from 'react'
import Header from './header.component'
import Footer from './footer.component'

class Create extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            code: '',
            name: ''
        }
        this.createRoom = this.createRoom.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    stringGen(len) {
        var text = "";

        var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < len; i++)
            text += charset.charAt(Math.floor(Math.random() * charset.length));

        return text;
    }
    componentDidMount(){
        this.setState({
            code: this.stringGen(5)
        })
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    createRoom() {
        alert(this.state.code)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div>
                    <Header></Header>
                </div>
                <div className="group-name-input-div">
                    <form className="group-name-input" onSubmit={this.createRoom}>
                        <div className="form-group">
                            <label>Group Name:  </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Group Code:  </label>
                            <input
                                type="text"
                                className="form-control"
                                name="code"
                                value={this.state.code}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit"
                                value={"Create " + this.state.name}
                                className="btn btn-primary" />
                        </div>
                    </form>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
} export default Create