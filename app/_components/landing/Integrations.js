// app/_components/landing/Integrations.js

'use client';

import { useRef, forwardRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { AnimatedBeam } from '@/components/magicui/animated-beam';

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex size-14 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
        className
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = 'Circle';

export default function Integration() {
  const containerRef = useRef(null);

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full mt-6 md:gap-10">
      {/* Left */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <BoxReveal boxColor={'#4f46e5'} duration={0.6}>
          <p className="text-3xl md:text-[3rem] font-bold leading-tight">
            Simplify Payments <br className="hidden md:block" /> and Sync
            Everywhere
          </p>
        </BoxReveal>
        <BoxReveal boxColor={'#4f46e5'} duration={0.6}>
          <p className="text-base md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
            Accept payments via <strong>bKash</strong>,{' '}
            <strong>SSLCommerz</strong> and <strong>Stripe</strong>, while
            syncing data seamlessly with <strong>Google Sheets</strong>,{' '}
            <strong>Notion</strong>, <strong>Gmail</strong> and more; all from
            one powerful form builder.
          </p>
        </BoxReveal>
        {/* CTA button */}
        <div>
          <button className="hidden md:flex px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Get Started Free
          </button>
        </div>
      </div>

      {/* Right Side - Animated Integrations */}
      <div
        className="relative flex h-[280px] w-full max-w-xl items-center justify-center overflow-hidden px-4 md:p-0"
        ref={containerRef}
      >
        <div className="flex size-full max-h-[240px] max-w-lg flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <Icons.bKash />
            </Circle>
            <Circle ref={div5Ref}>
              <Icons.sheets />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <Icons.sslcommerz />
            </Circle>
            <Circle ref={div4Ref} className="size-16">
              <Icons.form_builder />
            </Circle>
            <Circle ref={div6Ref}>
              <Icons.notion />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <Icons.stripe />
            </Circle>
            <Circle ref={div7Ref}>
              <Icons.gmail />
            </Circle>
          </div>
        </div>

        {/* Animated Beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          reverse
        />
      </div>
    </section>
  );
}

const Icons = {
  bKash: () => <Image src="/bKash.svg" alt="bKash" width={28} height={28} />,
  form_builder: () => (
    <Image
      src="/form_builder_logo.png"
      alt="Form Builder"
      width={32}
      height={32}
    />
  ),
  sslcommerz: () => (
    <Image src="/sslcommerz.png" alt="SSLCommerz" width={28} height={28} />
  ),
  stripe: () => <Image src="/stripe.svg" alt="Stripe" width={28} height={28} />,
  sheets: () => (
    <Image src="/sheets.svg" alt="Google Sheets" width={28} height={28} />
  ),
  notion: () => <Image src="/notion.svg" alt="Notion" width={28} height={28} />,
  gmail: () => <Image src="/gmail.svg" alt="Gmail" width={28} height={28} />,
};
