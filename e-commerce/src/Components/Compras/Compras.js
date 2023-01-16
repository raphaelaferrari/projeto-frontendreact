import React, { useEffect, useState } from "react";
import { Ul, Li, Img, SectionCompras, Button, Div, ButtonCompra  } from "./style";

const Compras = (lista, setLista, soma,setSoma ) => {
    
    const [removeItem, setRemoveItem] = useState()
    const [novoItem, setNovoItem] = useState();
   
    const adicionaLista = () => {
        
        const novaLista = [...lista.lista];
        const item = novaLista.find((produto) => produto.id === novoItem.id)
        
        if (!item) {
            novaLista.push(novoItem)
        }else{
            item.quantidade = item.quantidade +1
            item.precoCompra = item.preco * item.quantidade
        }

        lista.setLista(novaLista)

        localStorage.setItem("carrinho", JSON.stringify(lista.lista))
        localStorage.setItem("soma", JSON.stringify(lista.soma))  
         
    }

    const removeLista = () => {
        
        const novaLista = [...lista.lista];
        const item = novaLista.find((produto) => produto.id === removeItem.id)
        
        if (item.quantidade > 1) {
            item.quantidade = item.quantidade -1
            item.precoCompra  = item.precoCompra  - item.preco
            lista.setLista(novaLista)
        }else{
            const filtrandoLista = novaLista.filter((produto) => produto.id !== removeItem.id)
            lista.setLista(filtrandoLista)
        }

        localStorage.setItem("carrinho", JSON.stringify(lista.lista))
        localStorage.setItem("soma", JSON.stringify(lista.soma))  
    }
    
    const removendoItem = (produto) => {

        setRemoveItem(produto)
        lista.setSoma(lista.soma - produto.preco)
    }
    const adicionaMaisItem = (produto) =>{
        setNovoItem(produto)
        lista.setSoma(lista.soma + produto.preco)
    }
    
    const finalizarCompra = () => {
        alert("Confirmar compra?")
    }

    useEffect(() => {
        localStorage.setItem("carrinho", JSON.stringify(lista.lista))   
        lista.setLista(JSON.parse(localStorage.getItem("carrinho")))
    },[])

    useEffect(()=>{
        
        localStorage.setItem("soma", JSON.stringify(lista.soma))  
        lista.setSoma(JSON.parse(localStorage.getItem("soma")))
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
                {lista.soma < 1 ? <p>0</p> : <p>{lista.soma}</p>}
                <ButtonCompra onClick={finalizarCompra}>Finalizar</ButtonCompra>
            </Div>
            
        </>
    );
}


export default Compras