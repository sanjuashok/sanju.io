import React, {Component} from 'react';
import './styles/Card.css'

class Card extends Component {
    render() {
        return (
            <div className='Card'>
                {this.props.children}
            </div>
        );
    }
}

export default Card;
