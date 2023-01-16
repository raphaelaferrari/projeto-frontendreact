import React, { useEffect, useState }from 'react';
import Footer from './Components/Footer/Footer';
import './App.css'
import Main from './Components/Main/Main';
import Haeder from './Components/Haeder/Haeder';
import Img1 from './img/Casaco galáxia universo estrelas rosa.png'
import Img2 from './img/Moletom Cropped Espaço Planeta.png'
import Img3 from './img/Moletom Unissex Planetas Sistema Solar.png'
import Img4 from './img/Moletom Espaço Astronauta.png'
import Img5 from './img/Camisa Nasa Astronauta Marte.png'
import Img6 from './img/Camisa alienígena.png'
import Img7 from './img/Camisa Feminina Galáxia.png'
import Img8 from './img/camisa galáxia na ponta dos dedos.png'
import Img9 from './img/Pijama infantil Galáxia Bebê Manga Comprida.png'
import Img10 from './img/Baby Doll Galáxias.png'
import Img11 from './img/Pijamas Galáxia.png'
import Img12 from './img/Conjunto de pijama Astronauta & Impressão de galáxia.png'
import GlobalStyle from './GlobalStyle/GlobalStyle';
import Carrinho from './img/compras.png'
import Home from './img/home1.png'
import Compras from './Components/Compras/Compras';
import Slogan from './img/slogan.png'

function App() {

  const produtos = [
    {id: 1,quantidade: 0,img: Img1,nome: "Casaco galáxia universo estrelas rosa",preco: 40.24, precoCompra: 0},
    {id: 2,quantidade: 0,img: Img2,nome: "Moletom Cropped Espaço Planeta",preco: 44.46, precoCompra: 0},
    {id: 3,quantidade: 0,img: Img3,nome: "Moletom Planetas Sistema Solar",preco: 64.24, precoCompra: 0},
    {id: 4,quantidade: 0,img: Img4,nome: "Moletom Espaço Astronauta",preco: 62.22, precoCompra: 0},
    {id: 5,quantidade: 0,img: Img5,nome: "Camisa Nasa Astronauta Marte",preco: 24.86, precoCompra: 0},
    {id: 6,quantidade: 0,img: Img6,nome: "Camisa alienígena",preco: 46.66, precoCompra: 0},
    {id: 7,quantidade: 0,img: Img7,nome: "Camisa Feminina Galáxia",preco: 48.46, precoCompra: 0},
    {id: 8,quantidade: 0,img: Img8,nome: "Camisa galáxia na ponta dos dedos",preco: 36.26, precoCompra: 0},
    {id: 9,quantidade: 0,img: Img9,nome: "Pijama infantil Galáxia",preco: 62.84, precoCompra: 0},
    {id: 10,quantidade: 0,img: Img10,nome: "Baby Doll Galáxias",preco: 48.24, precoCompra: 0},
    {id: 11,quantidade: 0,img: Img11,nome: "Pijama Galáxia",preco: 84.28, precoCompra: 0},
    {id: 12,quantidade: 0,img: Img12,nome: "Conjunto de pijama Astronauta",preco: 46.48, precoCompra: 0}
  ]

  const [mudarTela, setMudarTela] = useState(1);
  const [novoItem, setNovoItem] = useState();
  const [lista, setLista] = useState([]);
  const [soma, setSoma] =  useState(0)
  
  const trocaTela = (tela) => {
    setMudarTela(tela)
       
  }

  useEffect(() => {
       
    setLista(JSON.parse(localStorage.getItem("carrinho")))
  },[])

  useEffect(()=>{
      
    setSoma(JSON.parse(localStorage.getItem("soma")))
      
    
  },[])


  switch (mudarTela) {
    case 1:
      return (
        <>
          <GlobalStyle/>
          <Haeder trocaTela={trocaTela} carrinho={Carrinho} home={Home} Slogan={Slogan} />
          
          <Main  
          produtos={produtos}
          novoItem={novoItem} setNovoItem={setNovoItem}
          lista={lista} setLista={setLista}
          soma={soma} setSoma={setSoma}
          />
          <Footer/>
        </>
      );
      break;
  
    case 2:
      return (
        <>
          <GlobalStyle/>
          <Haeder trocaTela={trocaTela} carrinho={Carrinho} home={Home} Slogan={Slogan}/>
          <Compras 
            lista={lista} setLista={setLista}
            novoItem={novoItem} setNovoItem={setNovoItem}
            soma={soma} setSoma={setSoma}
          />
          <Footer/>
        </>
      );
      break;
  }
  
}

export default App;
