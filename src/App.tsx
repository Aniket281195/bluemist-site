import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ProductRangeSection } from './components/ProductRangeSection';
import { QualitySection } from './components/QualitySection';
import { UseCasesSection } from './components/UseCasesSection';
import { CustomBrandingSection } from './components/CustomBrandingSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { MissionSection } from './components/MissionSection';
import { ContactSection } from './components/ContactSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="bg-primary min-h-screen text-secondary selection:bg-tertiary selection:text-primary overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <div id="products">
        <ProductRangeSection />
      </div>
      <QualitySection />
      <UseCasesSection />
      <CustomBrandingSection />
      <WhyChooseSection />
      <MissionSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  );
}

import ContactForm from './components/ContactForm';

const AppWrapper = () => (<>
<App />
<ContactForm />
</>);

export default AppWrapper;
