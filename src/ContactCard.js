import React, {Component} from "react"; 
import PropTypes from "prop-types";

class ContactCard extends Component{
    render(){
        const backgroundStyle ={
            backgroundColor:"#f1f199"
        }
        const headerColor = {
            textAlign: "center"
          }
      
        return(
            <div style = {backgroundStyle}>
                <h1 style ={headerColor}>{this.props.name}</h1>
                <ul>
                    <li>mobile: {this.props.mobile}</li>
                    <li>work: {this.props.work}</li>
                    <li>email: {this.props.email}</li>
                </ul>
            </div>
        );
    }
}

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    work: PropTypes.string,
    email: PropTypes.string.isRequired
}

export default ContactCard; 