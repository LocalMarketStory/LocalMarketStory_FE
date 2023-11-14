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
            <GptButton onClick={()=>handleNavigete("/GPT")}>
                Make Plane
            </GptButton>
        </NavbarWrapper>
    )
};

export default Navbar;

const NavbarWrapper = styled.div`
    display: flex;

`;

const HomeButton = styled.div`
    width: 3.125rem;
    height: 3.125rem;
`;

const GptButton = styled.div`
    width: 3.125*2rem;
    height: 3.125rem;
`;