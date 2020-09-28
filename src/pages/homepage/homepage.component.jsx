// General
import React from 'react';

// Our Components
import Directory from '../../components/directory/directory.component';

// Styles
import { HomePageContainer } from './homepage.styles';

/* Component fo the home page of the web */
const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>      
);

export default HomePage;