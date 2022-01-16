import styled from "styled-components"

const Header = () => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt="linkedin" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <img src="/images/search-icon.svg" alt="search icon" />
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a>
                                <img src="/images/nav-home.svg" alt="home" />
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-network.svg" alt="home" />
                                <span>My Network</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-jobs.svg" alt="home" />
                                <span>Jobs</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-messaging.svg" alt="home" />
                                <span>Messaging</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-notifications.svg" alt="home" />
                                <span>Notifications</span>
                            </a>
                        </NavList>
                        <User>
                            <a>
                                <img src="/images/user.svg" alt="user" />
                                <span>Me</span>
                                <img src="/images/down-icon.svg" alt="icon" />
                            </a>

                            <SignOut>
                                <a>Sign Out</a>
                            </SignOut>
                        </User>
                        <Work>
                            <a>
                                <img src="/images/nav-work.svg" alt="work" />
                                <span>
                                    Work
                                    <img src="/images/down-icon.svg" alt="icon" />
                                </span>
                            </a>
                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: white;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    padding: 0 24px;
    z-index: 100;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`

const Search = styled.div`
    position: relative;
    opacity: 1;
    flex-grow: 1;

    & > div {
        max-width: 280px;
        
        input {
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0,0,0,0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }
`

const SearchIcon = styled.div`
    position: absolute;
    top: 9px;
    left: 2px;
    width: 40px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: none;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Nav = styled.nav`
    margin-left: auto;
    display: block;

    @media (max-width: 768px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        width: 100%;
    }
`

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style: none;

    .active {
        span:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            transform: scaleX(1);
            border-bottom: 2px solid #fff;
            transition: transform .2s ease-in-out;
            width: 100%;
            border-color: rgba(0,0,0,0.9);
        }
    }
`

const NavList = styled.li`
    display: flex;
    align-items: center;

    a {
        position: relative;
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 52px;
        min-width: 80px;
        text-decoration: none;
        cursor: pointer;

        span {
            color: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
        }

        @media (max-width: 768px) {
            min-width: 70px;
        }
    }

    &:hover,
    &:active {
        a {
            span {
                color: rgba(0,0,0,0.9);
            }
        }
    }
`

const SignOut = styled.div`
    position: absolute;
    top: 45px;
    background: #fff;
    border-radius: 0 0 5px 5px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: center;
    display: none;
`

const User = styled(NavList)`
    a > svg {
        width: 24px;
        border-radius: 50%;
    }

    a > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }

    span {
        display: flex;
        align-items: center;
    }

    &:hover {
        ${SignOut} {
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`

const Work = styled(User)`
    border-left: 1px solid rgba(0,0,0,0.08);
`

export default Header
