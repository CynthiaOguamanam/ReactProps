import React from 'react'
import styled from 'styled-components'
import Hero from '../Hero/hero'
import Image from '../img/BB.jpg'
import pic from '../img/B.jpg'

const Body = ({props}) =>{
    return <Container>
        <Hero Title='Parents' src={Image} Desc='Coding is quickly becoming an essential skill, one that will prepare your kids to succeed in an increasingly digital world.

Tynker offers a range of options to learn coding: Your children can learn to code with our self-paced, immersive game-like courses, and then advance to learning real-world Python and JavaScript.

Select the option that’s best for your child!'></Hero>
         <Hero directory='row-reverse' Title='Education' Desc='Join over 100,000 schools that use Tynker to engage students with coding and connect with other educators who love to code!

Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can create a free account, set up your virtual classroom, and assign ready-made lesson plans!

Tynker empowers K-12 educators with free PD, standards-aligned curricula, cross-curricular STEM coding, AP Computer Science courses, and many great coding resources.' src={pic}></Hero>
    </Container>
}

export default Body;

const Container = styled.div`
    width:100%;
    background-color: silver;
    display:flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
`;

