import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Movies({ movies }) {
    useEffect(() => {
        console.log('asdfdasff', movies.movies)
    }, [movies])
    const imgSrcCutter = (url) => {

        let index = url.indexOf('jpg'); // jpg
        let newUrl = url.slice(0, index + 3);
        if (index) {
            index = url.indexOf('png');
            newUrl = url.slice(0, index + 3);
        }
        console.log(newUrl);
        return newUrl;
    }
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                {movies.movies.map((movie, index) => <Link key={movie.id} to={{ pathname: `detail/${movie.id}`, state: movie }}>
                    <Wrap key={index}>
                        <img src={movie.backgroundImg} alt={movie.title} />
                    </Wrap>
                </Link>)}
            </Content>
        </Container>
    )
}
const mapStateToProps = state => {
    return {
        movies: state
    }
}
export default connect(mapStateToProps)(Movies);

const Container = styled.div`
    padding-bottom: 10px;
`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgb( 249 249 249 / 0.1);
    box-shadow: rgb( 0 0 0 / 0.69 ) 0 26px 30px -10px,
    rgb( 0 0 0 / 0.73 ) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgb( 249 249 249 / 0.8);
        box-shadow: rgb( 0 0 0 / 0.8 ) 0 40px 58px -16px,
        rgb( 0 0 0 / 0.72 ) 0px 30px 22px -10px;
    }
`;