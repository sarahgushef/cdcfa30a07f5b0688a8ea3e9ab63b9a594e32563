import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

import Header from 'components/Header';
import CardSection from 'components/CardSection';

const StyledContainer = styled(Container)`
    padding-right: 0 !important;
    padding-left: 0 !important;
`;

function App() {
    return (
        <StyledContainer maxWidth='sm'>
            <Header />
            <CardSection />
        </StyledContainer>
    );
}

export default App;
