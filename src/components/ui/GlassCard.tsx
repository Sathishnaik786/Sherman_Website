import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export function GlassCard({ children, className, hoverGlow = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverGlow ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={cn(
        "glass-card p-8 rounded-[2rem] relative overflow-hidden group",
        className
      )}
    >
      {hoverGlow && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function BentoGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-4 gap-6", className)}>
      {children}
    </div>
  );
}

export function BentoCard({ 
  children, 
  className,
  size = 'sm'
}: { 
  children: React.ReactNode; 
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClasses = {
    sm: 'md:col-span-1',
    md: 'md:col-span-2',
    lg: 'md:col-span-2 md:row-span-2',
  };

  return (
    <div className={cn(sizeClasses[size], className)}>
      <GlassCard className="h-full">
        {children}
      </GlassCard>
    </div>
  );
}
