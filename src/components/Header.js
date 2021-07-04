import React, { useEffect } from 'react'
import styled from 'styled-components';
import { fetchMovies } from '../Redux/getAllAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Header({ data }) {

    useEffect(() => {
        // fetchMovies();
    }, [])

    return (
        <Nav>
            <Logo src='/images/logo.svg'></Logo>
            <NavMenu>
                <Link to='/'>
                    <img src='/images/home-icon.svg' />
                    <span>HOME</span>
                </Link>
                <a>
                    <img src='/images/search-icon.svg' />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' />
                    <span>ORIGINAL</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' />
                    <span>SERIES {data ? '??' : '!!'} </span>
                </a>
            </NavMenu>
            <UserImg
                src='https://scontent.ftip3-2.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/119737321_3273602166094859_5893894193111030176_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeFE4Gh5EybI0buQV83KFYOVsLVi4HjB74CwtWLgeMHvgEMxWcsW6VXOnVpIlXKST1G7FIIpD71gQwt1tHAGekvd&_nc_ohc=chzxfTChbJIAX9qpGmr&_nc_ht=scontent.ftip3-2.fna&tp=27&oh=26f781ccb80782ff06fed126a9769299&oe=60E6004A'
            >
            </UserImg>
        </Nav>
    )
}

const mapStateToProps = state => {
    return {
        data: state
    }
}


export default connect(mapStateToProps)(Header);

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 30px;
    overflow-x: hidden;
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-decoration: none;
        color:#fff;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: '';
                height: 2px;
                background-color: #fff;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                transform-origin: left center;
                opacity: 0;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`;

const UserImg = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
`;