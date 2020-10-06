import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

import Header from 'components/Header';
import CardSection from 'components/CardSection';
import LocationModal from 'components/LocationModal';
import CartPopup from 'components/CartPopup';

const StyledContainer = styled(Container)`
    padding-right: 0 !important;
    padding-left: 0 !important;
`;

function App() {
    const [openLocationModal, setOpenLocationModal] = useState(false);
    const [openCartPopup, setOpenCartPopup] = useState(false);
    const [date, setDate] = useState();

    const selectedDay = (val) => {
        setDate(val);
    };

    const handleOpenLocationModal = () => {
        setOpenLocationModal(true);
    };

    const handleCloseLocationModal = () => {
        setOpenLocationModal(false);
    };

    const addToCart = () => {
        setOpenCartPopup(true);
    };

    return (
        <StyledContainer maxWidth='sm'>
            <div>
                <Header
                    handleOpen={handleOpenLocationModal}
                    selectedDay={selectedDay}
                    date={date}
                />
                <CardSection date={date} addToCart={addToCart} />
                {openCartPopup === true && <CartPopup />}
            </div>

            <LocationModal
                handleClose={handleCloseLocationModal}
                open={openLocationModal}
                setOpen={setOpenLocationModal}
            />
        </StyledContainer>
    );
}

export default App;
