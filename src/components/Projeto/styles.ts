import styled from "styled-components";

export const Card = styled.div`
    border: 1px solid #c1c1c1;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
`;

export const LinkBotao = styled.a`
    display: inline-block;
    color: #ffffff;
    font-size: 14px;
    background-color: #447;
    text-decoration: none;
    padding: 8px;
    border-radius: 5px;
    margin-top: 24px;

    &:hover {
        background-color: #335;
    }
`;