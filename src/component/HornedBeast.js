import React from "react";

class HornedBeast extends React.Component {
    render() {
        return(
            <div>
            <h2>{this.props.title}</h2>
            <p>{this.props.disc}</p>
            <img src ={this.props.img} alt='horend 1'></img>
            <style jsx>
                {`img{
                        width:700px;
                        height :400px;
                          }`}
            </style>
            </div>
            )
    }
}

export default HornedBeast;