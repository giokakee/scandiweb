import { Component } from "react";
import { CapacityAttribute, SizeAttribute, ColorAttribute, PortsAttribute, TouchIdAttribute } from "../productPage/attributes.js/headerCartAttributes";


class HeaderCartAttribute extends Component {


    render(){
        const { attribute, chosenAttributes } = this.props

        return(
            <div>
                {attribute.name === 'Size'                 && <SizeAttribute     attribute={attribute} chosenAttributes={chosenAttributes} />}
                {attribute.name === 'Capacity'             && <CapacityAttribute attribute={attribute} chosenAttributes={chosenAttributes} />}                 
                {attribute.name === 'Color'                && <ColorAttribute    attribute={attribute} chosenAttributes={chosenAttributes} />}
                {attribute.name === 'With USB 3 ports'     && <PortsAttribute    attribute={attribute} chosenAttributes={chosenAttributes} />}
                {attribute.name === 'Touch ID in keyboard' && <TouchIdAttribute  attribute={attribute} chosenAttributes={chosenAttributes} />}
            </div>
        )
    }
}

export default HeaderCartAttribute