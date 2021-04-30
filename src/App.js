import React from 'react';
import './App.scss';

// Components
import { Layout } from './components/Layout';
import { FormContainer } from './components/Form/FormContainer';

const App = () => (
    <Layout>
      <FormContainer />
    </Layout>
);

export default App;
