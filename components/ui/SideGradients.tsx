import React from 'react';

export default function SideGradients() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div 
        className="absolute w-[720px] h-[720px] rounded-full blur-[120px] opacity-[0.25] dark:opacity-[0.2] -top-[280px] -left-[200px] animate-drift1" 
        style={{ background: 'radial-gradient(circle at 30% 30%, var(--g1), transparent 65%)' }} 
      />
      <div 
        className="absolute w-[720px] h-[720px] rounded-full blur-[120px] opacity-[0.25] dark:opacity-[0.2] -top-[180px] -right-[260px] animate-drift2" 
        style={{ background: 'radial-gradient(circle at 70% 40%, var(--g2), transparent 65%)' }} 
      />
    </div>
  );
}
