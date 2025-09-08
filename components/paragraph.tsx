import React from 'react'

export const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="mt-4 text-gray-700 leading-relaxed">
      {children}
    </p>
  )
}
