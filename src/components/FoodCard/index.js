import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import StarRatings from 'react-star-ratings';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        flexBasis: 600,
        margin: '16px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        paddingLeft: '32px',
        paddingRight: '32px',
    },
    button: {
        backgroundColor: '#f9234a',
        color: 'white',
        paddingLeft: '32px',
        paddingRight: '32px',
    },
    foodName: {
        fontSize: '16px',
        marginBottom: '4px',
        fontWeight: 'bold',
    },
    foodDesc: {
        marginTop: '8px',
        color: '#6e7679',
    },
    price: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
}));

const Rating = styled.div`
    & span {
        color: #6e7679;
    }
`;

function FoodCard({ data, addToCart }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={data.image}
                title={data.name}
            />
            <CardContent className={classes.cardContent}>
                <Rating>
                    <span>
                        {data.rating}{' '}
                        <StarRatings
                            rating={data.rating}
                            starRatedColor='#f9234a'
                            numberOfStars={5}
                            name='rating'
                            starDimension='14px'
                            starSpacing='4px'
                        />
                    </span>
                </Rating>
                <p className={classes.foodName}>{data.name}</p>
                <p className={classes.foodDesc}>
                    {`by ${data.productBy} `}
                    <FiberManualRecordIcon style={{ fontSize: '8px' }} />{' '}
                    {data.location}
                </p>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <span className={classes.price}>
                        {`Rp ${new Intl.NumberFormat('id-ID', {
                            maximumSignificantDigits: 3,
                        }).format(data.price)}`}
                    </span>
                    <Button
                        variant='contained'
                        className={classes.button}
                        onClick={addToCart}
                    >
                        ADD +
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default FoodCard;
