'use client';

import CncCapabilitiesSection from '@/components/cnc/CncCapabilitiesSection';
import CncFeaturesSection from '@/components/cnc/CncFeaturesSection';
import CncHeroSection from '@/components/cnc/CncHeroSection';
import CncPerformanceSection from '@/components/cnc/CncPerformanceSection';
import CncWorkflowSection from '@/components/cnc/CncWorkflowSection';
import IndustriesAndMaterialsSection from '@/components/cnc/IndustriesAndMaterialsSection';
import Container from '@/components/common/Container/Container';
import React from 'react';

export default function CncPage() {
  return (
    <Container className=''>
      <CncHeroSection />
      <CncCapabilitiesSection />
      <IndustriesAndMaterialsSection />
      <CncWorkflowSection />
      <CncFeaturesSection />
      <CncPerformanceSection />
    </Container>
  );
}
