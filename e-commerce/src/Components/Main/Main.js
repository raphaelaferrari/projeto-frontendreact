import React, { useEffect, useState } from 'react';
import CampoDeBusca from '../CampoDeBusca/CampoDeBusca';
import Filtros from '../Filtros/Filtros';
import { SectionProdutos, Ul, Li, Img, Button} from './style';

const Main = ({produtos, lista, setLista, novoItem, setNovoItem, soma, setSoma }) => {

    const [busca, setBusca] =  useState("");

    const [ordem, setOrdem] = useState("1");

    const [valorMaximo, setValorMaximo] = useState("");

    const [valorMinimo, setValorMinimo] = useState("");

    const adicionaLista = () => {
        
        const novaLista = [...lista];
        const item = novaLista.find((produto) => produto.id === novoItem.id)
        
        if (!item) {
            novaLista.push(novoItem)
        }else{
            item.quantidade = item.quantidade +1
            item.precoCompra = item.preco * item.quantidade
        }

        setLista(novaLista)  
        
    }

    const adicionaItem = (produto) => {
        
        produto.quantidade = + 1
        produto.precoCompra = produto.preco * produto.quantidade
        setNovoItem(produto)   
        setSoma(soma + produto.preco)
        
    };

    
   return(

        <>
            
            <CampoDeBusca 
            setBusca={setBusca}
            />
            <Filtros                 
            ordem={ordem} setOrdem={setOrdem}
            valorMaximo={valorMaximo} setValorMaximo={setValorMaximo}
            valorMinimo={valorMinimo} setValorMinimo={setValorMinimo}
            />
            
            <SectionProdutos>
                    
                {produtos.sort((produto1, produto2) => {
                    if (ordem === "1") {
                        return produto1.preco > produto2.preco ? 1 : -1
                    }else if (ordem === "2") {
                        return produto1.preco > produto2.preco ? -1 : 1
                    }
                        
                })
                .filter((produto) => {
                    return produto.nome.toUpperCase().includes(busca.toUpperCase())
                })
                .filter((produto) => {
                    if (valorMaximo === "") {
                    return produto
                    }else if(valorMaximo >= produto.preco)
                        return produto
                })
                .filter((produto) => {
                    if (valorMinimo === "") {
                    return produto
                    }else if(valorMinimo <= produto.preco)
                        return produto
                })
                .map((produto, index) => {
                    
                    return (
                        <Ul key={index}>
                            <Li>
                            <Img src={produto.img}/>
                            </Li>
                            <Li>{produto.nome}</Li>
                            <Li>R${produto.preco}</Li>
                            <Li>
                                <Button onMouseDown={() => adicionaItem(produto)} onMouseUp={adicionaLista}>Adicionar a sacola</Button>
                                
                            </Li>
                        </Ul>
                    )
                        
                })}
                        
            </SectionProdutos>
            
        </>
        
    );
}

export default Main;