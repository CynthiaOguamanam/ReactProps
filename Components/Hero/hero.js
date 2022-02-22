import React from 'react'
import styled from 'styled-components'





const Hero = ({Title, Desc, src, directory})=>{
    return <Div>
             <Wrapper   directory= {directory}>
                <ImageHold src={src}/>
                <Texts>
                <H2>{Title}</H2>
                <P>{Desc}</P>
                </Texts>
            </Wrapper>
    </Div>

}

export default Hero;

const Wrapper = styled.div`
    width: 100%;
    height: 450px;
    // background-color:#132032 ;
    display:flex;
    justify-contents: space-between;
    align-items: center;
    flex-direction: ${({directory}) => directory}
`;

const ImageHold = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 100%;
    object-fit: cover;
`;
const Texts = styled.div`
    width: 500px;
    height: 300px;
    // background: white;
    margin: 30px;
    margin-bottom:120px;
    // margin-left: 100px;

`;

const H2 = styled.h2`
  font-size: 50px;
`;

const P = styled.p`
font-size: 20px;
`;

const Div = styled.div`

`;