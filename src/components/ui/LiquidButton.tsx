"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const MotionButton = motion.button as any;
const MotionSpan = motion.span as any;

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function LiquidButton({ children, className, type = "button", onClick, disabled, ...props }: LiquidButtonProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const buttonRef = useRef<HTMLElement>(null);

    // Nearly every call site wraps this component in a <Link>/<a> purely for
    // styling. Nesting a real <button> inside an anchor is invalid HTML and
    // creates a double tab stop, so when the component has no button behavior
    // of its own (no submit, no click handler, no disabled state) render a
    // <span> and let the surrounding link provide the semantics and focus.
    const isRealButton = type === 'submit' || Boolean(onClick) || disabled !== undefined;
    const Tag = isRealButton ? MotionButton : MotionSpan;

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <Tag
            {...(isRealButton ? { type, onClick, disabled } : {})}
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative overflow-hidden group px-8 py-4 bg-transparent border-2 border-primary text-primary font-black uppercase italic tracking-tighter rounded-2xl transition-all duration-300 shadow-lg hover:shadow-primary/30 magnetic cursor-pointer inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                isHovered && "text-primary-foreground",
                className
            )}
            {...props}
        >
            <span className="relative z-10 transition-colors duration-300">
                {children}
            </span>
            <motion.div
                className="absolute w-[300px] h-[300px] bg-primary rounded-full pointer-events-none z-0"
                initial={{ scale: 0 }}
                animate={{
                    scale: isHovered ? 1.5 : 0,
                    x: position.x - 150,
                    y: position.y - 150,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                    mass: 0.5
                }}
            />
        </Tag>
    );
}
