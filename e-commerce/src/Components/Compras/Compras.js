import React, { useEffect, useState } from "react";
import { Ul, Li, Img, SectionCompras, Button, Div, ButtonCompra  } from "./style";

const Compras = (lista, setLista ) => {
    
    const [removeItem, setRemoveItem] = useState()
    const [novoItem, setNovoItem] = useState();
   
    const adicionaLista = () => {
        
        const novaLista = [...lista.lista];
        const item = novaLista.find((produto) => produto.id === novoItem.id)
        
        if (!item) {
            novaLista.push(novoItem)
        }else{
            item.quantidade = item.quantidade +1
            item.precoCompra = (item.preco * item.quantidade).toFixed(2)
        }

        lista.setLista(novaLista)

        localStorage.setItem("carrinho", JSON.stringify(lista.lista))
         
    }
    
    const removeLista = () => {
        
        const novaLista = [...lista.lista];
        const item = novaLista.find((produto) => produto.id === removeItem.id)
        
        if (item.quantidade > 1) {
            item.quantidade = item.quantidade - 1
            item.precoCompra  = (item.precoCompra  - item.preco).toFixed(2)
            lista.setLista(novaLista)
            
        }else{
            const filtrandoLista = novaLista.filter((produto) => produto.id !== removeItem.id)
            lista.setLista(filtrandoLista)
            item.precoCompra  = (item.precoCompra  - item.preco).toFixed(2)
        }
        
        localStorage.setItem("carrinho", JSON.stringify(lista.lista))
    }
    
    const removendoItem = (produto) => {
        
        setRemoveItem(produto)
    }
    const adicionaMaisItem = (produto) =>{
        
        setNovoItem(produto)  
    }
    
    const finalizarCompra = () => {
        alert("Confirmar compra?")
    }

    useEffect(() => {
        localStorage.setItem("carrinho", JSON.stringify(lista.lista))   
        lista.setLista(JSON.parse(localStorage.getItem("carrinho")))
    },[])

    return(
        <>
            
            <SectionCompras>

                {lista.lista.map((produto, index) => {
                        
                        return (
                            <Ul key={index}>
                                <Li>
                                <Img src={produto.img}/>
                                </Li>
                                <Li>{produto.quantidade} {produto.nome}</Li>
                                <Li>
                                    <Button onMouseDown={() => adicionaMaisItem(produto)} onMouseUp={adicionaLista}> + </Button >
                                    R${produto.precoCompra}
                                    <Button onMouseDown={() => removendoItem(produto)} onMouseUp={removeLista}> - </Button >
                                </Li>
                            </Ul>
                        )
                            
                    })}

            </SectionCompras>
            
            <Div>
                <ButtonCompra onClick={finalizarCompra}>Finalizar</ButtonCompra>
            </Div>
            
        </>
    );
}


export default Compras