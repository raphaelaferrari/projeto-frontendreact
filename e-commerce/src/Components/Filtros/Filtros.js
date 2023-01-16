import React from "react"
import { Ul, InputMaximo, InputMinimo, Select, Li} from "./style"

const Filtros = ({ ordem, setOrdem, valorMaximo, setValorMaximo, valorMinimo, setValorMinimo }) => {

    const onChangeOrdem = (event) => {
        setOrdem(event.target.value)
    }

    const onChangeValorMax = (event) => {
        setValorMaximo(event.target.value)
    }

    const onChangeValMin = (event) => {
        setValorMinimo(event.target.value)
    }

   
    return(
        <>
            <Ul>

                <Li>
                    <label className='maximo'>Valor máximo</label>
                    <InputMaximo className='maximo' type="number" min="1" max="90" value={valorMaximo} onChange={(event) => onChangeValorMax(event)}></InputMaximo>
                </Li>
                <Li>
                    <label className='minimo'>Valor mínimo</label>
                    <InputMinimo className='minimo' type="number" min="1" max="90" value={valorMinimo} onChange={(event) => onChangeValMin(event)}></InputMinimo>
                </Li>
                <Li>
                    <label id='ordenacao' >Ordenação</label>
                    <Select id='ordenacao' value={ordem} onChange={(event) => onChangeOrdem(event)}>
                        <option value="1">Crescente</option>
                        <option value="2">Decrescente</option>                  
                    </Select>
                </Li>
                
            </Ul> 
        </>
    )
}

export default Filtros