import React from 'react';
import Error from 'next/error';

const NotFound: React.SFC = () => {
    return <Error statusCode={404} />;
};

export default NotFound;
