import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar=()=>{
    const navigate = useNavigate();
    const handleNavigete = (url)=>{
        navigate(url);
    };
    return (
        <NavbarWrapper>
            <HomeButton onClick={()=>handleNavigete("/")}>
                Home
            </HomeButton>
        </NavbarWrapper>
    )
};

export default Navbar;

const NavbarWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

const HomeButton = styled.div`
    width: 3.125rem;
    height: 3.125rem;
`;