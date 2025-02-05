/* eslint-disable */
// withDeviceDetection.jsx
import React from 'react';
import { headers } from 'next/headers';

/**
 * A higher-order component that injects an `isMobile` prop
 * into the wrapped component based on the user-agent.
 *
 * @param {React.ComponentType<any>} WrappedComponent - The component to wrap.
 * @returns {React.FC} A new component that renders the WrappedComponent with the `isMobile` prop.
 */
export function withDeviceDetection(WrappedComponent:any) {
  return function DeviceDetectionWrapper(props:any) {
    const headersList =   headers();
    // @ts-ignore
    const userAgent = headersList.get('user-agent') || '';
    // A generic regex that checks for common mobile devices.
    const isMobile = /Mobi|Android|iPhone/i.test(userAgent);
    
    return <WrappedComponent {...props} isMobile={isMobile} />;
  };
}
