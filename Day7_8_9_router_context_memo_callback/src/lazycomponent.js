import React, { Suspense } from 'react';

// Lazy load the components
const Header = React.lazy(() => import('./Header'));
const Content = React.lazy(() => import('./Content'));
const Footer = React.lazy(() => import('./Footer'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>

      <Suspense fallback={<div>Loading Content...</div>}>
        <Content />
      </Suspense>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
