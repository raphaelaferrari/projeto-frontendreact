import React, { useEffect, useState } from 'react';
import { Section, Li, Img, Ul, Nav, ImgSlogan } from './style';

const Haeder = ({ carrinho, home, trocaTela, Slogan}) => {

    
    return(
  
        
        <Section>

                <ImgSlogan src={Slogan}></ImgSlogan>
            <Ul>

                <Nav> 
                    <Li>
                        <a onClick={() => trocaTela(1)}>
                            <Img src={home}></Img>
                        </a>                    
                    </Li>

                    <Li>  
                        <a onClick={() => trocaTela(2)}>
                            <Img src={carrinho}></Img>
                            
                        </a>
                    </Li>
                </Nav>
                
                
                
            </Ul>

        </Section>
    );
}

export default Haeder;