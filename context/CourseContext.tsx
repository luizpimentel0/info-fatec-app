import React, { createContext, useContext } from 'react';

type CourseContextType = {
  slug: string | undefined;
};

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export function CourseProvider({ children, slug }: { children: React.ReactNode; slug?: string }) {
  return (
    <CourseContext.Provider value={{ slug }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourseSlug() {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourseSlug must be used within CourseProvider');
  }
  return context.slug;
}
