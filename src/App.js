import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

import Header from 'components/Header';

const StyledContainer = styled(Container)`
    padding-right: 0 !important;
    padding-left: 0 !important;
`;

function App() {
    return (
        <StyledContainer maxWidth='sm'>
            <Header />
        </StyledContainer>
    );
}

export default App;
