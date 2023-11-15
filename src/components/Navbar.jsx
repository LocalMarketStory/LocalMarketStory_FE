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
                Plane
            </GptButton>
        </NavbarWrapper>
    )
};

export default Navbar;

const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`;

const HomeButton = styled.div`
    width: 3.125rem;
    height: 3.125rem;
    align-items: center;
    margin-right: 1rem;
`;

const GptButton = styled.div`
    width: 3.125*2rem;
    height: 3.125rem;
    align-items: center;
    margin-left: 1rem;
`;