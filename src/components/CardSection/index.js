import React from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';

import FoodCard from 'components/FoodCard';

import foods from 'data/food.json';

const CardWrapper = styled(Container)`
    padding-top: 24px;
    display: flex !important;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

function index() {
    return (
        <CardWrapper>
            {foods.map((food) => (
                <FoodCard key={food.id} data={food} />
            ))}
        </CardWrapper>
    );
}

export default index;
