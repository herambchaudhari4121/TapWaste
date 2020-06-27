import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import CansBackground from '../assets/images/cans-background.jpg';

const Styles = styled.div`
    .jumbo {
        display: flex;
        align-items: center;
        background: url(${CansBackground}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 100vh;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

    .text-header {
        text-align: center;
        z-index: 0;
        opacity: 1;
        font-size: 10vw;
        color: white;
        font-weight: bold;
        font-family: 'Catamaran', sans-serif;
    }

    .text-header-para {
        z-index: 0;
        opacity: 1;
        text-align: center;
        font-size: 8vw;
        color: #efefef;
        font-family: 'Piedra', cursive;
    }
`;

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1 className="text-header">Welcome</h1>
                <p className="text-header-para">Sell Your Trash in a fly!</p>
            </Container>
        </Jumbo>
    </Styles>
);


export default Jumbotron;