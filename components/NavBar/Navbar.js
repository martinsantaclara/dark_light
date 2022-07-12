import React, { useState, useRef } from 'react';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import Link from 'next/link';
import {
    NavbarContainer,
    LeftContainer,
    CenterContainer,
    RightContainer,
    RightContainerLeft,
    RightContainerRight,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    IconHamb,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
    ContainerThemeSelector,
    ContainerToggle,
    BtnSwitchTheme,
    SearchBar,
    CategoryDropdown,
    BiDownArrowButton,
    ContainerList,
    ListCategories,
    Category,
    InputSearch,
    BsSearchButton,
    BsPersonButton,
} from './NavbarStyles';
import { useStateContext } from '../../context/StateContext';

import { BiDownArrow } from 'react-icons/bi';

// import Argentina from '/images/ar (1).png';
// import Usa from './images/us (1).png';

function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);
    const { darkMode, setThemeLocalStorage } = useStateContext();

    const [showBandera, setShowBandera] = useState(false);
    const [actualLanguage, setActualLanguage] = useState('/images/ar (1).png');
    const [alternativeLanguage, setAlternativeLanguage] = useState(
        './images/us (1).png'
    );

    const [category, setCategory] = useState('All Categories');
    const [showList, setShowList] = useState(false);
    const inputRef = useRef();

    const categories = [
        'All Categories',
        'Electronics',
        'Fashion',
        'Furniture',
        'Sports',
    ];

    const handleShowList = () => {
        setShowList(!showList);
    };

    const handleCategory = (category) => {
        // console.log(category);
        setShowList(false);
        setCategory(category);
        if (inputRef.current.value === '') {
            inputRef.current.placeholder = 'Search in ' + category;
        }
    };

    const handleSearch = () => {
        console.log(category + ' ' + inputRef.current.value);
    };

    const handleListBandera = () => {
        setShowBandera(!showBandera);
    };

    const changeFlag = () => {
        const alternativeFlag = alternativeLanguage;
        setAlternativeLanguage(actualLanguage);
        setActualLanguage(alternativeFlag);
        setShowBandera(false);
    };

    return (
        <NavbarContainer extendNavbar={extendNavbar} isDark={darkMode}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Link href="/">
                        <NavbarLink href="">
                            <Logo src="/images/logo.png" />
                        </NavbarLink>
                    </Link>
                </LeftContainer>
                <CenterContainer>
                    <SearchBar>
                        <CategoryDropdown>
                            <p>{category}</p>
                            <BiDownArrowButton
                                onClick={handleShowList}
                            ></BiDownArrowButton>
                            <ContainerList show={showList}>
                                <ListCategories>
                                    {categories.map((category) => {
                                        return (
                                            <Category
                                                key={category}
                                                onClick={() =>
                                                    handleCategory(category)
                                                }
                                            >
                                                {category}
                                            </Category>
                                        );
                                    })}
                                </ListCategories>
                            </ContainerList>
                        </CategoryDropdown>
                        <InputSearch
                            type="text"
                            placeholder="Search in All Categories"
                            ref={inputRef}
                        />
                        <BsSearchButton onClick={handleSearch}></BsSearchButton>
                    </SearchBar>
                    {/* <Link href="/products">
                            <NavbarLink href=""> Products</NavbarLink>
                        </Link>
                        <Link href="/contact">
                            <NavbarLink href=""> Contact Us</NavbarLink>
                        </Link>
                        <Link href="/about">
                            <NavbarLink href=""> About Us</NavbarLink>
                        </Link> */}
                    {/* </NavbarLinkContainer> */}
                </CenterContainer>
                <RightContainer>
                    {/* <NavbarLinkContainer> */}
                    <RightContainerLeft>
                        <ContainerThemeSelector>
                            <ContainerToggle isDark={darkMode}>
                                <BtnSwitchTheme
                                    onClick={setThemeLocalStorage}
                                    isDark={darkMode}
                                ></BtnSwitchTheme>
                            </ContainerToggle>
                        </ContainerThemeSelector>
                        <div className="languages">
                            <div
                                className={`containerLanguages ${
                                    showBandera ? 'show' : ''
                                }`}
                            >
                                <div className="actualLanguage">
                                    <img src={actualLanguage} alt="" />
                                    <BiDownArrow
                                        className="arrowLanguage"
                                        onClick={handleListBandera}
                                    ></BiDownArrow>
                                </div>
                                <ul className="alternative">
                                    <li onClick={changeFlag}>
                                        <img
                                            // src={`../assets/${alternativeLanguage}.png`}
                                            src={alternativeLanguage}
                                            alt=""
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </RightContainerLeft>
                    <RightContainerRight>
                        <Link href="/favorites">
                            <NavbarLink href="">
                                <AiOutlineHeart />
                            </NavbarLink>
                        </Link>
                        <Link href="/signIn">
                            <NavbarLink href="">
                                <BsPersonButton />
                            </NavbarLink>
                        </Link>

                        <Link href="/cart">
                            <NavbarLink href="">
                                <AiOutlineShoppingCart />
                            </NavbarLink>
                        </Link>
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }}
                        >
                            {extendNavbar ? (
                                <IconHamb>&#10005;</IconHamb>
                            ) : (
                                <IconHamb> &#8801;</IconHamb>
                            )}
                        </OpenLinksButton>
                    </RightContainerRight>
                    {/* </NavbarLinkContainer> */}
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended href="/"> Home</NavbarLinkExtended>
                    <NavbarLinkExtended href="/products">
                        {' '}
                        Products
                    </NavbarLinkExtended>
                    <NavbarLinkExtended href="/contact">
                        {' '}
                        Contact Us
                    </NavbarLinkExtended>
                    <NavbarLinkExtended href="/about">
                        {' '}
                        About Us
                    </NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}

export default Navbar;
