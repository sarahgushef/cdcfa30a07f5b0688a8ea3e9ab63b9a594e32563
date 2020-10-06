import React from 'react';
import styled from 'styled-components';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DatePicker from 'react-horizontal-datepicker';

const Header = styled.header`
    position: sticky;
    padding: 0 16px;
    background-color: white;
    color: black;
    z-index: 3;
    top: 0;
`;

const BackAndAddress = styled.div`
    display: flex;

    & div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
    }

    & p {
        font-size: 10px;
        margin-bottom: 0;
    }

    & span {
        font-size: '16px';
        margin-bottom: 0;
    }
`;

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
    color: red;
`;

const Calender = styled.div`
    margin-top: 24px;

    & button,
    span {
        display: none;
    }
`;

function index() {
    const selectedDay = (val) => {
        return val;
    };

    return (
        <Header>
            <BackAndAddress>
                <div>
                    <ArrowBackIcon />
                </div>
                <div>
                    <p>ALAMAT PENGIRIMAN</p>
                    <div>
                        <span>Tokopedia Tower</span>
                        <StyledExpandMoreIcon />
                    </div>
                </div>
            </BackAndAddress>
            <Calender>
                <DatePicker
                    getSelectedDay={selectedDay}
                    endDate={14}
                    selectDate={new Date()}
                    labelFormat={'MMMM'}
                    color={'#424749'}
                />
            </Calender>
        </Header>
    );
}

export default index;
