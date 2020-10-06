import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const PopUp = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    background-color: #a23530;
    border-radius: 10px;
    color: white;
    bottom: 16px;
    left: 0;
    padding: 16px;
    width: 85%;
    margin: 0 auto;

    & p {
        margin-top: 4px;
        margin-bottom: 4px;
        font-weight: bold;
    }

    & p:nth-child(2) {
        font-size: 12px;
    }
`;

function CartPopup() {
    return (
        <PopUp>
            <div>
                <p>5 Items | Rp. 125.000</p>
                <p>Termasuk Ongkos Kirim</p>
            </div>
            <div>
                <ShoppingCartIcon />
                <KeyboardArrowRightIcon />
            </div>
        </PopUp>
    );
}

export default CartPopup;
