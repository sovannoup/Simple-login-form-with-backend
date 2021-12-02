import React from 'react';
import '../style/styleComponent.css'
export class UserInput extends React.Component{
    constructor(prop) {
        super(prop);
        this.state = {
            inputValue: '',
            inputFocused: false,
        };
    }
    render() {

        const{
            placeholder
        } =  this.props

        const {inputValue, inputFocused} = this.state
        return (
            <div className="boxInput">
                {inputFocused  && <p className="topBar">{placeholder}</p>}
                <input
                    placeholder={inputFocused ? '' : placeholder} 
                    className="userInput" 
                    onFocus={()=> this.setState({inputFocused: true})} 
                    onChange={(value)=> this.setState({inputValue: value})}
                    value={inputValue}
                />
            </div>
        
        )
    }
}

export class SubmitBtn extends React.Component{
    render() {
      return (
      <a href="3"  className="submit"  />
      )
    }
  }
  