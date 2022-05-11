import { Component } from "react";
import CapacityAttribute from "./attributes.js/capacity";
import ColorAttribute from "./attributes.js/color";
import PortsAttribute from "./attributes.js/ports";
import SizeAttribute from "./attributes.js/size";
import TouchIdAttribute from "./attributes.js/touchId";


class Attribute extends Component {


    render(){
        const { attribute } = this.props

        
        return(
            <div>
                {attribute.name === 'Size'     && <SizeAttribute attribute={attribute} />}
                {attribute.name === 'Capacity' && <CapacityAttribute attribute={attribute} />}                 
                {attribute.name === 'Color'    && <ColorAttribute  attribute={attribute}/> }
                {attribute.name === 'With USB 3 ports' && <PortsAttribute attribute={attribute} />}
                {attribute.name === 'Touch ID in keyboard' && <TouchIdAttribute attribute={attribute} /> }
            </div>
        )
    }
}

export default Attribute