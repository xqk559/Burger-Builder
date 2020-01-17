import React, {Component} from 'react' ;
import ReactAux from '../../hoc/ReactAux' ;
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {
    render () {
        return (
            <ReactAux>
                <div>
                    Burger
                </div>
                <div>Build Controls</div>
            </ReactAux>
        );
    }
}

export default BurgerBuilder ;