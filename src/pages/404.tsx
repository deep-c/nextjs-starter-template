import React from 'react';
import Error from 'next/error';

const NotFound: React.FC = () => {
    return <Error statusCode={404} />;
};

export default NotFound;
