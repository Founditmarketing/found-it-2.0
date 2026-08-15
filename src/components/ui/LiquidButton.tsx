"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const MotionButton = motion.button as any;
const MotionSpan = motion.span as any;

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function LiquidButton({ children, className, type = "button", onClick, disabled, ...props }: LiquidButtonProps) {
    // Nearly every call site wraps this component in a <Link>/<a> purely for
    // styling. Nesting a real <button> inside an anchor is invalid HTML and
    // creates a double tab stop, so when the component has no button behavior
    // of its own (no submit, no click handler, no disabled state) render a
    // <span> and let the surrounding link provide the semantics and focus.
    const isRealButton = type === 'submit' || Boolean(onClick) || disabled !== undefined;
    const Tag = isRealButton ? MotionButton : MotionSpan;

    return (
        <Tag
            {...(isRealButton ? { type, onClick, disabled } : {})}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative px-8 py-4 bg-transparent border-2 border-primary text-primary font-black uppercase italic tracking-tighter rounded-2xl hover:bg-primary hover:text-primary-foreground transition-colors duration-200 magnetic cursor-pointer inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )}
            {...props}
        >
            <span className="relative z-10">
                {children}
            </span>
        </Tag>
    );
}
