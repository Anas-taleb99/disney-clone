import React from 'react';
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src='/images/viewers-disney.png' alt='' />
            </Wrap>        
            <Wrap>
                <img src='/images/viewers-pixar.png' alt='' />
            </Wrap>        
            <Wrap>
                <img src='/images/viewers-marvel.png' alt='' />
            </Wrap>        
            <Wrap>
                <img src='/images/viewers-starwars.png' alt='' />
            </Wrap>        
            <Wrap>
                <img src='/images/viewers-national.png' alt='' />
            </Wrap>        
        </Container>
    )
}

export default Viewers;

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
`;

const Wrap = styled.div`
    border: 3px solid rgb( 249 249 249 / 0.1 );
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 2px 30px -10px rgb( 0 0 0 / 0.69 ),
    0px 16px 10px -10px rgb( 0 0 0 / 0.73 );
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: 0px 40px 58px -16px rgb( 0 0 0 / 0.8 ),
        0px 30px 22px -10px rgb( 0 0 0 / 0.72 );
        transform: scale(1.05);
        border-color: rgb( 249 249 249 / 0.8 );
    }
`;