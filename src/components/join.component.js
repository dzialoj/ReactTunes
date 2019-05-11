import React from 'react'
import Header from './header.component'
import Footer from './footer.component'

class Join extends React.Component{

    constructor(){
        super()
        this.state = {
            code: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit(){
        if(this.state.code.length !== 5){
            alert("Boosha! A valid code is 5 characters!")
        } else {
            alert(this.state.code)
        }
    }
    render(){
        return(
            <div>
                <Header></Header>
                <div className="group-name-input-div">
                    <form className="group-name-input" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Enter Code:  </label>
                            <input
                                type="text"
                                className="form-control"
                                name="code"
                                value={this.state.code}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit"
                                value="Enter"
                                className="btn btn-primary" />
                        </div>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}export default Join