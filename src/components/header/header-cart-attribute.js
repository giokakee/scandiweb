import { Component } from "react";
import CapacityAttribute from "../productPage/attributes.js/headercartattributes/capacityattribute";
import ColorAttribute from "../productPage/attributes.js/headercartattributes/colorattribute";
import PortsAttribute from "../productPage/attributes.js/headercartattributes/portsattribute";
import SizeAttribute from "../productPage/attributes.js/headercartattributes/sizeattribute";
import TouchIdAttribute from "../productPage/attributes.js/headercartattributes/touchidattribute";



class HeaderCartAttribute extends Component {


    render(){
        const { attribute, chosenAttributes, cart } = this.props
        return(
            <div>
                {attribute.name === 'Size'                 && <SizeAttribute     attribute={attribute} chosenAttributes={chosenAttributes} cart={cart} />}
                {attribute.name === 'Capacity'             && <CapacityAttribute attribute={attribute} chosenAttributes={chosenAttributes} cart={cart} />}                 
                {attribute.name === 'Color'                && <ColorAttribute    attribute={attribute} chosenAttributes={chosenAttributes} cart={cart} />}
                {attribute.name === 'With USB 3 ports'     && <PortsAttribute    attribute={attribute} chosenAttributes={chosenAttributes} cart={cart} />}
                {attribute.name === 'Touch ID in keyboard' && <TouchIdAttribute  attribute={attribute} chosenAttributes={chosenAttributes} cart={cart} />}
            </div>
        )
    }
}

export default HeaderCartAttribute