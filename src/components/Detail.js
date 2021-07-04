import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import movies from '../desneyMovies.json';

function Detail(props) {
    console.log(props.location);
    const { id } = useParams();
    const thisMovie = movies.movies.filter((movie) => movie.id == id);
    console.log(thisMovie[0].title);
    return (
        <Container>
            <Background>
                <img src={thisMovie[0].backgroundImg}
                    alt='boa'
                />
            </Background>
            <ImageTitle>
                <img alt='aa' src={thisMovie[0].titleImg} />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' alt='play' />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' alt='play' />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src='/images/group-icon.png' alt='group watch' />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {thisMovie[0].subTitle}
            </SubTitle>
            <Discription>
                {thisMovie[0].description}
            </Discription>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:-1;
    opacity: 0.8;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-content: space-between;
    
`;

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249 249 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    margin-bottom: 10px;
    &:hover {
        background-color: rgb(198 198 198);
    }
`;

const TrailerButton = styled(PlayButton)`
    background-color: rgb(0 0 0 / 0.3);
    border: 1px solid rgb(249 249 249);
    color: rgb(249 249 249);
    text-transform: uppercase;
`;

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgb(0 0 0 / 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: #fff;
    }
`;

const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0 0 0);
`;

const SubTitle = styled.div`
    color: rgb(249 249 249);
    font-size: 15px;
    margin-top: 26px;
    min-height: 20px;
`;

const Discription = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb( 249 249 249);
    max-width: 760px;
`;