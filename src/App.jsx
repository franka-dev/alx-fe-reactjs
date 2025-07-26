import React from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Frankline Amakoye" age={27} bio="A passionate software engineer from Kenya." />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
