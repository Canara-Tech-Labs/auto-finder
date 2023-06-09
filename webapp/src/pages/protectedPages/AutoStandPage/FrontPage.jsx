import React from 'react';

import "../AutoStandPage/FrontPage.css"
import { Link } from 'react-router-dom';

const BoxButton = () => {
    return (
        <div className="frontpage-box">
            <div className="frontpage-box1">
                <Link to='/autostand/table'>
                <button className="frontpage-butn-box1">
                    <label className="frontpage-label">Kumta</label>
                </button></Link>
                <Link to='/autostand/table'><button className="frontpage-butn-box2">
                    <label className="frontpage-label">Bargi</label>
                </button></Link>
            </div>

            <div className="frontpage-box2">
            <Link to='/autostand/table'><button className="frontpage-butn-box3">
                    <label className="frontpage-label">Ankola</label>
                </button></Link>
                <Link to='/autostand/table'><button className="frontpage-butn-box4">
                    <label className="frontpage-label">Honnavar</label>
                </button></Link>
            </div>

        </div>
    );
};

export default BoxButton;


