import React from 'react';
import { headers } from 'next/headers';

export function withDeviceDetection(WrappedComponent) {
  return function DeviceDetectionWrapper(props) {
      const headersList = headers();
      const userAgent = headersList.get("user-agent") || '';
      const isMobile = /Mobi|Android|iPhone/i.test(userAgent);
      
      return <WrappedComponent {...props} isMobile={isMobile} />;
  };
}