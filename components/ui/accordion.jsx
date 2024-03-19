"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusCircledIcon, MinusCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <>
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    >
      <AccordionPrimitive.Item
        ref={ref}
        className={cn(" data-[state=open]:bg-[#353535]", className)}
        {...props}
      />
    </motion.div>
  </>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 justify-between items-center gap-2 text-left text-xl pb-4 font-medium transition-all hover:underline [&[data-state=open]>span]:hidden [&[data-state=closed]>svg]:hidden",
          className
        )}
        {...props}
      >
        {children}
        <span>
          <PlusCircledIcon className="h-6 w-6 text-gray-400 shrink-0 transition-transform duration-200 " />
        </span>
        <MinusCircledIcon className="h-6 w-6 text-gray-400 shrink-0 transition-transform duration-200 " />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
