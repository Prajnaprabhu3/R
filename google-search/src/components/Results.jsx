import React, { Component, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import Loading from './Loading';
import { useResultContext } from './contexts/ResultContextProvider';

// switch Component, One component need not look the same 
const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation();

    if (isLoading) return <Loading />



    // switch (location.pathname) {
    //     case '/search':
    //         return 'SEARCH';

    //         break;

    //     default:
    //         break;
    // }
}

export default Results;



https://towardsdatascience.com/facial-recognition-login-system-using-deep-learning-reactjs-61bff981eb74
https://pusher.com/tutorials/facial-recognition-react-native/
https://medium.com/analytics-vidhya/implement-a-face-recognition-attendance-system-with-face-api-js-part-iii-4ed3ffc49479
https://drive.google.com/file/d/1n2MOnh919Dk4ybdrpwgWd3KHvyyu3GqF/preview
https://github.com/tejas456sawant/Smart-Attendance
https://www.evoketechnologies.com/blog/employee-management-application-reactjs-framework/
https://github.com/reacto11mecha/auto-attendance
https://github.com/GraphtyLove/Face-recognition-project
https://dev.to/graphtylove/how-to-automate-attendance-record-with-face-recognition-python-and-react-4413