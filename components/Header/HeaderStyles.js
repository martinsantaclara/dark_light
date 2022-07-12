import styled from 'styled-components';

export const Header = styled.header``;
export const Container = styled.div`
    width: 80%;
    max-width: 1100px;
    margin: 0 auto;
    /* added for nav-toggle positioning */
    position: relative;
    display: flex;
    justify-content: space-between;
`;

export const HamburgerBtn = styled.button`
    cursor: pointer;
    border: 0;
    width: 3em;
    height: 3em;
    padding: 0em;
    border-radius: 50%;
    background: #072a2d;
    color: white;
    transition: opacity 250ms ease;

    position: absolute;
    left: 0;
`;

{
    /* <button class="nav-toggle" aria-label="open navigation">
                    <span class="hamburger"></span>
                </button> */
}

export const Logo = styled.a`
    // width: 100%;
    // height: 30%;
`;

export const Img = styled.img`
    width: 3rem;
    // height: 30%;
`;

export const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    align-content: center;
    @media ${({ theme }) => theme.breakpoints.sm} {
        grid-area: 1 / 1 / 2 / 3;
    }
`;
export const Div2 = styled.div`
    grid-area: 1 / 2 / 2 / 4;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media ${({ theme }) => theme.breakpoints.sm} {
        grid-area: 2 / 2 / 3 / 5;
    }
`;
export const Div3 = styled.div`
    grid-area: 1 / 5 / 2 / 6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media ${({ theme }) => theme.breakpoints.sm} {
        align-items: center;
        grid-area: 1 / 4 / 2 / 6;
    }
`;

// Navigation Links
export const NavLink = styled.a`
    font-size: 1.25rem;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        padding: 0.5rem;
    }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
    border: none;
    display: flex;
    position: relative;
    background: none;
    font-size: 1.0625rem;

    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    transition: 0.3s ease;

    &:focus {
        outline: none;
    }
    &:hover {
        color: #fff;
    }

    @media ${({ theme }) => theme.breakpoints.sm} {
        padding: 0.4rem 0;
    }
    @media ${({ theme }) => theme.breakpoints.md} {
        padding: 0;
    }
`;

// export const NavProductsIcon = styled(IoIosArrowDropdown)`
//     margin-left: 8px;
//     display: flex;
//     align-self: center;
//     transition: 0.3s ease;
//     opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
//     transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

//     &:hover {
//         opacity: 1;
//     }

//     @media ${({ theme }) => theme.breakpoints.sm} {
//         margin: 2px 0 0 2px;
//         width: 15px;
//     }
// `;

// Social Icons

export const SocialIcons = styled.a`
    transition: 0.3s ease;
    color: white;
    border-radius: 50px;
    padding: 8px;
    &:hover {
        background-color: #212d45;
        transform: scale(1.2);
        cursor: pointer;
    }
`;
