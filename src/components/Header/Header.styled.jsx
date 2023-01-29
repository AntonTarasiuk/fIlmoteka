import styled from "@emotion/styled";
import headerHomeMobile from "../../images/header-home-mobile.jpg"
import headerHomeMobile2x from "../../images/header-home-mobile@2x.jpg"
import headerHomeTablet from "../../images/header-home-tablet.jpg"
import headerHomeTablet2x from "../../images/header-home-tablet@2x.jpg"
import headerHomeDesktop from "../../images/header-home.jpg"
import headerHomeDesktop2x from "../../images/header-home@2x.jpg"

export const HeaderSection = styled.section`
    min-height: 230px;
    padding-top: 40px;
    padding-bottom: 40px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
        url(${props => props.ratio > 1 ? headerHomeMobile2x : headerHomeMobile});

        
    @media screen and (min-width: 768px){
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
        url(${props => props.ratio > 1 ? headerHomeTablet2x : headerHomeTablet})
    }

    @media screen and (min-width: 1024px) {
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
        url(${props => props.ratio > 1 ? headerHomeDesktop2x : headerHomeDesktop})
    }
`

export const HeaderContainer = styled.div`
    padding: 0 20px;
    margin: 0 auto;

    @media screen and (min-width: 320px) {
        width: 320px;
    }

    @media screen and (min-width: 768px) {
        width: 768px;
        padding: 0 32px;
    }

    @media screen and (min-width: 1024px) {
        width: 1024px;
    }
`
    // background-image: linear-gradient(to right, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
    //     url(${({windowWidth, ratio}) => {
    //         if (windowWidth < 768) {
    //             return (ratio > 1 ? headerHomeMobile2x : headerHomeMobile)
    //         } else if (windowWidth >= 768 & windowWidth < 1024) {
    //             return ratio > 1 ? headerHomeTablet2x : headerHomeTablet
    //         } else {
    //             return ratio > 1 ? headerHomeDesktop2x : headerHomeDesktop
    //         }
    //     }});

    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // font-size: 20px;
    // color: #010101;

export const SearchMsg = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    text-align: left;
    color: #FF001B;

    margin: 0 auto;

    max-width: 336px;

    @media screen and (min-width: 768px) {
        text-align: center;
        max-width: 400px;
    }    
`