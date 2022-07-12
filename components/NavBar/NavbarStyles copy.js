import styled from 'styled-components';
import Link from 'next/link';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
    background-color: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-color: ${({ isDark }) => (isDark ? 'orange' : 'blue')};
    //     opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};

    @media (min-width: 700px) {
        height: 50px;
    }
`;

export const LeftContainer = styled.div`
    // flex: 20%;
    display: flex;
    align-items: center;
    // padding-left: 5%;
    // flex-grow: 1;
`;

export const CenterContainer = styled.div`
    // flex: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    // padding-left: 5%;
    // padding-right: 5%;
    // flex-grow: 3;
`;

export const RightContainer = styled.div`
    // flex: 25%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // padding-right: 5%;
    // flex-grow: 2;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
`;

export const NavbarLink = styled.a`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 0 20px;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const IconHamb = styled.span`
    display: block;
    font-size: 70px;
`;

export const NavbarLinkExtended = styled.a`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;

export const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const ContainerThemeSelector = styled.div`
    display: flex;
    justify-content: space-around;
    height: 50px;
    width: 150px;
    align-items: center;
`;

export const ContainerToggle = styled.div`
    & {
        position: relative;
        width: 60px;
        height: 30px;
        border-radius: 30px;
        background-color: ${({ isDark }) => (isDark ? 'white' : 'black')};
        transition: 1s all ease-in;
    }
    &:before {
        position: absolute;
        content: '\\1F31C';
        top: 1px;
        left: 3px;
        font-size: 20px;
        opacity: ${({ isDark }) => (isDark ? 1 : 0)};
        z-index: ${({ isDark }) => (isDark ? 1 : -1)};
        transition: opacity 1.5s ease;
    }
    &:after {
        position: absolute;
        content: '\\1F31E';
        right: 3px;
        top: 1px;
        font-size: 20px;
        opacity: ${({ isDark }) => (isDark ? 0 : 1)};
        z-index: ${({ isDark }) => (isDark ? -1 : 1)};
        transition: opacity 1.5s ease;
    }
`;

export const BtnSwitchTheme = styled.button`
    position: absolute;
    cursor: pointer;
    bottom: 3px;
    left: ${({ isDark }) => (isDark ? '32px' : '5px')};
    width: 23px;
    height: 23px;
    border: none;
    border-radius: 50%;
    background-color: ${({ isDark }) => (isDark ? 'black' : 'white')};
    transition: 0.5s all ease-in;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    height: 50px;
    padding: 5px 10px;
    border: 1px solid dimgray;
`;

export const ListCategories = styled.select`
    background-color: transparent;
    color: white;
    border: none;
    outline: none;
`;

export const Category = styled.option`
    background-color: #363537;
    color white;
    border: 1px solid dimgray;
    margin-top: 20px;
    width: 300px;
`;

export const SearchInput = styled.input`
    background-color: transparent;
    color: white;
    border: none;
    outline: none;
    margin-left: 0.5rem;
    padding-left: 1rem;
    border-left: 1px solid dimgray;
    height: 60%;
    flex-grow: 1;
`;

export const SearchButton = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    outline: none;
    font-size: 20px;
`;

// export const SearchBar = styled.div`
//     background-color: #fff;
//     width: 100%;
//     display: flex;
//     padding: 2px;
//     border-radius: 4px;
//     align-items: center;
//     font-size: 1rem;
// `;

// export const CategoryDropdown = styled.div`
//     background-color: #160053;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     color: #fff;
//     width: 300px;
//     padding: 10px 10px;
//     /* cursor: pointer; */
//     position: relative;
//     border-radius: 4px;
// `;

// export const ContainerList = styled.div`
//     position: absolute;
//     top: 120%;
//     left: 0;
//     background-color: #fff;
//     color: #555;
//     width: 100%;
//     border-radius: 4px;
//     max-height: 0;
//     overflow: hidden;
//     transition: max-height 0.5s ease-in;
// `;

// export const ListCategories1 = styled.ul`
//     list-style: none;
//     margin: 0;
//     padding: 10px;
// `;

// export const Category1 = styled.li`
//     padding: 10px 20px;
//     cursor: pointer;
//     &:hover {
//         background-color: #160053;
//         color: #fafafa;
//     }
// `;

// export const InputSearch = styled.input`
//     padding: 10px 25px;
//     width: 100%;
//     border: none;
//     outline: none;
//     font-size: 18px;
// `;

export const SearchBar = styled.div`
    background-color: #fff;
    width: 100%;
    display: flex;
    padding: 2px;
    border-radius: 4px;
    align-items: center;
`;

export const CategoryDropdown = styled.div`
    background-color: #160053;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    width: 300px;
    padding: 10px 20px;
    /* cursor: pointer; */
    position: relative;
    border-radius: 4px;
    font-size: 18px;
`;

export const ContainerList = styled.div`
    position: absolute;
    top: 120%;
    left: 0;
    background-color: #fff;
    color: #555;
    width: 100%;
    border-radius: 4px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in;
`;

// #select .containerList.show {
//     max-height: 500px;
//     transition: max-height 0.5s linear;
// }

export const ListCategories1 = styled.ul`
    list-style: none;
    margin: 0;
    padding: 10px;
    /* opacity: 0; */
    /* transition: padding 1s linear, max-height 1s linear; */
    /* transition-duration: 1s;
    transition-timing-function: linear; */
`;

// #select ul.show {
//     /* padding-top: 10px;
//     padding-bottom: 10px; */
//     /* opacity: 1; */
//     /* width: 91%; */
//     /* padding: 10px; */
//     /* transition-property: padding, max-height;
//     transition-duration: 1s;
//     transition-timing-function: linear; */
//     /* z-index: 99; */
// }

export const Category1 = styled.li`
    padding: 10px 20px;
    cursor: pointer;
`;

// #select .containerList ul li:hover {
//     background-color: #160053;
//     color: #fafafa;
// }

// .bsSearch {
//     font-size: 48px;
//     margin-right: 20px;
//     cursor: pointer;
// }

// .bsSearch:hover {
//     color: orange;
//     color: #160053;
//     transform: scale(1.2);
// }

export const InputSearch = styled.input`
    padding: 10px 25px;
    width: 100%;
    border: none;
    outline: none;
    font-size: 18px;
`;

// .arrow {
//     cursor: pointer;
// }
