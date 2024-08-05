"use client"
import React, { createContext, useContext, useState } from 'react';

export interface BreadCrumbProps {
  crumb: string;
  crumbLink: string;
}

type BreadcrumbContextType = {
  breadcrumbs: BreadCrumbProps[];
  setBreadcrumbs: React.Dispatch<React.SetStateAction<BreadCrumbProps[]>>;
};

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export const BreadcrumbProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadCrumbProps[]>([]);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumbs = () => {
  const context = useContext(BreadcrumbContext);
  if (context === undefined) {
    throw new Error('useBreadcrumbs must be used within a BreadcrumbProvider');
  }
  return context;
};