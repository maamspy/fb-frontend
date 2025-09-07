// app/(public)/page.js

import React from 'react';
import { Features } from '../_components/landing/Features';
import Integrations from '../_components/landing/Integrations';
import { ScrollBasedVelocity } from '../_components/landing/ScrollBasedVelocity';

const HomePage = () => {
  return (
    <>
      <Integrations />
      <ScrollBasedVelocity />
      <Features />
    </>
  );
};

export default HomePage;
