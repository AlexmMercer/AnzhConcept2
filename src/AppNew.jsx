import React from 'react';
import Header from './components/Header';
import FolderContainer from './components/FolderContainer';
import HeroNew from './components/HeroNew';
import StickyTabs from './components/StickyTabs';
import SheetContainer from './components/SheetContainer';
import AboutNew from './components/AboutNew';
import BusinessNew from './components/BusinessNew';
import CourseNew from './components/CourseNew';
import Footer from './components/Footer';

function AppNew() {
  return (
    <div className="app">
      <Header />
      <FolderContainer>
        <HeroNew />
        <StickyTabs />

        <SheetContainer
          id="about"
          number={1}
          title="Эксперт"
          color="gray"
        >
          <AboutNew />
        </SheetContainer>

        <SheetContainer
          id="business"
          number={2}
          title="Решения для бизнеса"
          color="orange"
          offset={4}
        >
          <BusinessNew />
        </SheetContainer>

        <SheetContainer
          id="course"
          number={3}
          title="Курс «яПрав!»"
          color="purple"
          offset={8}
        >
          <CourseNew />
        </SheetContainer>
      </FolderContainer>
      <Footer />
    </div>
  );
}

export default AppNew;
