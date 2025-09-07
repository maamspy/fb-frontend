// app/_components/landing/ScrollBasedVelocity.js

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from '@/components/magicui/scroll-based-velocity';

export function ScrollBasedVelocity() {
  const text = 'We are building something crazy!';

  return (
    <div className="relative mt-6 flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer className="text-4xl md:text-7xl md:leading-[5rem] font-bold tracking-[-0.02em]">
        <ScrollVelocityRow baseVelocity={4} direction={1}>
          <span className="mr-6">{text}</span>
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={4} direction={-1}>
          <span className="mr-6">{text}</span>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
