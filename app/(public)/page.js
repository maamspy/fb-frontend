// app/(public)/page.js

import React from 'react';
import { Features } from '../_components/landing/Features';
import Integrations from '../_components/landing/Integrations';

const HomePage = () => {
  return (
    <>
      <Integrations />
      <Features />
    </>
  );
};

export default HomePage;
