import Link from 'next/link';
import React from 'react';

import {} from './HeaderStyles';

const Header = () => {
    return (
        <header>
            <div class="container row">
                <button class="nav-toggle" aria-label="open navigation">
                    <span class="hamburger"></span>
                </button>
                <a class="logo" href="#">
                    <img
                        src="img/logo.svg"
                        alt="conquering responsive layouts"
                    />
                </a>
                <nav class="nav">
                    <ul class="nav__list nav__list--primary">
                        <li class="nav__item">
                            <a href="#" class="nav__link">
                                Home
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#" class="nav__link">
                                About
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#" class="nav__link">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul class="nav__list nav__list--secondary">
                        <li class="nav__item">
                            <a href="#" class="nav__link">
                                Sign In
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#" class="nav__link nav__link--button">
                                Sign up
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
