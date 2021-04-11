import React, { Component } from "react";

class CheckBox extends Component {
    state = {
        languages: [] 
    }
    onChange = (event) =>{
        //console.log(event.target.checked);
        const isChecked = event.target.checked;
        if(isChecked){
            this.setState({ languages: [...this.state.languages, event.target.value] });
        }else{
            let index = this.state.languages.indexOf(event.target.value);
            this.state.languages.splice(index, 1);
            this.setState({ languages: this.state.languages });
        }
    }
    onSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.languages);
    }
    render() {
        return (
            <div className='checks'>
                <form onSubmit={this.onSubmit}>
                <p>Select languages.</p>
                <input type="checkbox" name="languages" value="French" onChange={this.onChange}/>
                <label htmlFor="language1"> French</label><br />
                <input type="checkbox" name="languages" value="Spanish" onChange={this.onChange}/>
                <label htmlFor="language2"> Spanish</label><br />
                <input type="checkbox" name="languages" value="German" onChange={this.onChange}/>
                <label htmlFor="language3"> German</label><br />
                <input type="checkbox" name="languages" value="Hindi" onChange={this.onChange}/>
                <label htmlFor="language4"> Hindi</label><br />
                <input type="checkbox" name="languages" value="Japanese" onChange={this.onChange}/>
                <label htmlFor="language5"> Japanese</label><br />
                <input type="checkbox" name="languages" value="Mandarin" onChange={this.onChange}/>
                <label htmlFor="language6"> Mandarin</label>
                <br />
                <input type='submit' value='Submit'/>
                </form>
            </div>
        );
    }
}
export default CheckBox;