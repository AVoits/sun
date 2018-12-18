import * as React from 'react';
import styled from 'styled-components';


interface Props {
}

const Header: React.StatelessComponent<Props> = () => (
    <TopBlock>Helloooooooo</TopBlock>
);

const TopBlock = styled.div`
    background-color: #7fffd4;
    font-size: 24px;
`;


export {Header}