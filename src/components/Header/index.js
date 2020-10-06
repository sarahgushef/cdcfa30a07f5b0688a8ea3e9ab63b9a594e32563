import React from 'react';
import styled from 'styled-components';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DatePicker from 'react-horizontal-datepicker';

const Header = styled.header`
    position: sticky;
    padding: 16px 16px 8px 16px;
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

    & div:nth-child(2) {
        cursor: pointer;
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
    margin: 24px 0 16px 0;

    & button,
    span {
        display: none;
    }
`;

const EatOptionsSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    border-bottom: 0.1px solid #f1f1f2;
    border-top: 0.1px solid #f1f1f2;
`;

const EatOptionsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const LunchWrapper = styled.div`
    background-color: #424749;
    width: 50%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 0.1px solid #f1f1f2;
    cursor: pointer;
    color: white;
`;

const DinnerWrapper = styled.div`
    width: 50%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1px solid #f1f1f2;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
`;

function HeaderComponent(props) {
    return (
        <Header>
            <BackAndAddress>
                <div>
                    <ArrowBackIcon />
                </div>
                <div onClick={props.handleOpen}>
                    <p>ALAMAT PENGIRIMAN</p>
                    <div>
                        <span>Tokopedia Tower</span>
                        <StyledExpandMoreIcon />
                    </div>
                </div>
            </BackAndAddress>
            <Calender>
                <DatePicker
                    getSelectedDay={props.selectedDay}
                    endDate={14}
                    selectDate={props.date}
                    labelFormat={'MMMM'}
                    color={'#424749'}
                />
            </Calender>

            <EatOptionsSection>
                <EatOptionsWrapper>
                    <LunchWrapper>Lunch</LunchWrapper>
                    <DinnerWrapper>Dinner</DinnerWrapper>
                </EatOptionsWrapper>
            </EatOptionsSection>
        </Header>
    );
}

export default HeaderComponent;
