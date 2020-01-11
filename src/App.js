import React from 'react';
import './App.css';

// Components
import { Layout } from './components/Layout';
import { FormContainer } from './components/Form/FormContainer';

const App = () => (
  <div className="App">
    <Layout>
      <FormContainer />
    </Layout>
  </div>
);

export default App;
