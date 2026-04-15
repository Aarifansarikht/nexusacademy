'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BlobProps {
  className?: string;
  color?: string;
  delay?: number;
}

export function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30 dark:opacity-20">
      <Blob 
        className="top-[-10%] left-[-10%] w-[50%] h-[50%]" 
        color="bg-primary" 
        delay={0} 
      />
      <Blob 
        className="bottom-[10%] right-[-5%] w-[45%] h-[45%]" 
        color="bg-blue-400" 
        delay={2} 
      />
      <Blob 
        className="top-[30%] right-[10%] w-[30%] h-[30%]" 
        color="bg-indigo-500" 
        delay={4} 
      />
      <Blob 
        className="bottom-[20%] left-[10%] w-[25%] h-[25%]" 
        color="bg-purple-500" 
        delay={6} 
      />
    </div>
  );
}

function Blob({ className, color, delay }: BlobProps) {
  return (
    <motion.div
      initial={{ scale: 1, opacity: 0.3 }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute rounded-full blur-[100px]",
        color,
        className
      )}
    />
  );
}
