import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

const Home = () => {
  return (
    <div>
      <Header />
      <MainContent
        title="Introduction to React Components"
        content="This is a simple React app that demonstrates how to use components and props."
      />
    </div>
  );
};

export default Home;
