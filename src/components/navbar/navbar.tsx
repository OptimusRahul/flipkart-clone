import React, { FC } from 'react';

import { config } from '../../config/config';
import './navbar.css';

const { companyName } = config;

const Navbar: FC = (): JSX.Element => (
    <div className="header">
        <div className="header--company">
            <div className="header--company__logo"> Logo </div>
            <div className="heade--company__name"> { companyName } </div>
        </div>
        <div className="header--search__bar"> Searchbar </div>
        <div className="header--btn">
            <div className="header--btn__login"> Login </div>
            <div className="header--btn__more"> More </div>
            <div className="header--btn__cart"> Cart </div>
        </div>
    </div>
)

export default Navbar;