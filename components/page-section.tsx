import { cn } from '@/lib/utils';
import React from 'react'

export const PageSection = ({
  title,
  children,
  isBgGray,
  id
}: {
  title: string;
  children: React.ReactNode;
  isBgGray?: boolean
  id?: string
}) => (
  <section id={id} className={cn(
    "mt-10 py-16 min-h-[80vh] w-full flex items-center",
    { 'bg-gray-50': !!isBgGray }
  )}>
    <div className="mx-auto max-w-xl">
      <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
        {title}
      </h2>
      {children}
    </div>
  </section>
)
