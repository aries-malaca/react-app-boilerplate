import React, { useEffect } from 'react';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div>
      Home
    </div>
  );
};

export default Index;