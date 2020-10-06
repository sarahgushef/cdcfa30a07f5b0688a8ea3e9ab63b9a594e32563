import React from 'react';
import styled from 'styled-components';
import moment from 'moment/min/moment-with-locales';

import Container from '@material-ui/core/Container';

import FoodCard from 'components/FoodCard';

import foods from 'data/food.json';

const CardWrapper = styled(Container)`
    padding-top: 24px;
    display: flex !important;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const Date = styled.p`
    margin-left: 16px;
    font-size: 20px;
    font-weight: bold;
`;

function CardSection(props) {
    let selectedDate;

    if (props.date !== undefined) {
        moment.locale('id');

        selectedDate = `${moment(props.date).format('dddd')}, ${moment(
            props.date
        ).format('LL')}`;
    }

    return (
        <CardWrapper>
            <Date>{selectedDate}</Date>

            {foods.map((food) => (
                <FoodCard key={food.id} data={food} />
            ))}
        </CardWrapper>
    );
}

export default CardSection;
