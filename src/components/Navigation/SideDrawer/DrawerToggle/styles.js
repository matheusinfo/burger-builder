import styled from 'styled-components';

export const Container = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;

    @media (min-width: 600px) {
        display: none;
    }

    div{
        width: 90%;
        height: 3px;
        background-color: white;
        border-radius: 4px;
    }
`;