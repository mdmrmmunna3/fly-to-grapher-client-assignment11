import React from 'react';
import { Helmet } from 'react-helmet-async';

const MyReview = () => {
    return (
        <div>
            <Helmet>
                <title>MyReview {`-- FlyTo-Grapher`}</title>
            </Helmet>
            <h1>thsi is review</h1>
        </div>
    );
};

export default MyReview;