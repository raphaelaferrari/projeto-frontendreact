import React from "react";
import { InputBusca, Section, Label } from "./style";

const CampoDeBusca = ({ setBusca }) => {
    
    const onChangeBusca = (event) => {
        setBusca(event.target.value)
    }

    return(
        <Section>
            <Label className='busca'>Busca</Label>
            <InputBusca className='busca' type="text" onChange={(event) => onChangeBusca(event)}></InputBusca>
        </Section>
    )
}

export default CampoDeBusca