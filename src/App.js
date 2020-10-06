import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

import Header from 'components/Header';
import CardSection from 'components/CardSection';
import LocationModal from 'components/LocationModal';

const StyledContainer = styled(Container)`
    padding-right: 0 !important;
    padding-left: 0 !important;
`;

function App() {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState();

    const selectedDay = (val) => {
        setDate(val);
    };

    const handleOpenLocationModal = () => {
        setOpen(true);
    };

    const handleCloseLocationModal = () => {
        setOpen(false);
    };

    return (
        <StyledContainer maxWidth='sm'>
            <div>
                <Header
                    handleOpen={handleOpenLocationModal}
                    selectedDay={selectedDay}
                    date={date}
                />
                <CardSection date={date} />
            </div>

            <LocationModal
                handleClose={handleCloseLocationModal}
                open={open}
                setOpen={setOpen}
            />
        </StyledContainer>
    );
}

export default App;
