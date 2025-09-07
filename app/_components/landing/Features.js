// app/_components/landing/Features.js

'use client';

import {
  ClipboardList,
  Settings,
  Share2,
  BarChart3,
  Check,
} from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { Marquee } from '@/components/magicui/marquee';

const templates = [
  {
    name: 'Registration Form',
    body: 'Quickly onboard users with ready-to-use signup templates.',
  },
  {
    name: 'Survey Form',
    body: 'Collect feedback and opinions from your audience easily.',
  },
  {
    name: 'Payment Form',
    body: 'Accept payments and donations securely inside your forms.',
  },
  {
    name: 'Event RSVP',
    body: 'Manage attendees with built-in RSVP templates.',
  },
];

const features = [
  {
    Icon: ClipboardList,
    name: 'Form Templates',
    description: 'Choose from dozens of ready-to-use form templates.',
    href: 'templates',
    cta: 'Explore templates',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:18s] [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]"
      >
        {templates.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              'relative w-40 cursor-pointer overflow-hidden rounded-xl border p-3',
              'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
              'dark:border-gray-50/[.1] dark:bg-gray-50/[.08] dark:hover:bg-gray-50/[.12]',
              'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none'
            )}
          >
            <figcaption className="text-sm font-medium">{f.name}</figcaption>
            <blockquote className="mt-1 text-xs opacity-70">
              {f.body}
            </blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Settings,
    name: 'Drag & Drop Builder',
    description: 'Easily customize fields and layouts without code.',
    href: 'builder/try',
    cta: 'Try the builder',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <div className="absolute right-4 top-6 h-[280px] w-full bg-gradient-to-tr from-pink-200/40 to-blue-200/40 rounded-xl blur-xl group-hover:scale-105 transition-transform duration-300 ease-out" />
    ),
  },
  {
    Icon: Share2,
    name: 'Integrations',
    description: 'Connect with Slack, Google Sheets, Zapier and more.',
    href: 'integrations',
    cta: 'See integrations',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <div className="absolute right-4 top-6 h-[280px] w-full bg-gradient-to-tr from-green-200/40 to-yellow-200/40 rounded-xl blur-xl group-hover:scale-105 transition-transform duration-300 ease-out" />
    ),
  },
  {
    Icon: BarChart3,
    name: 'Analytics',
    description: 'Track responses and insights in real time.',
    className: 'col-span-3 lg:col-span-1',
    href: 'dashboard',
    cta: 'View dashboard',
    background: (
      <Calendar
        mode="single"
        selected={new Date()}
        className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
];

export function Features() {
  return (
    <section className="w-full py-8">
      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
        {/* bento grid */}
        <div className="w-full lg:[width:70%]">
          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>

        {/* marketing text */}
        <div className="w-full lg:[width:30%] flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Build smarter forms <br className="hidden md:block" /> in minutes
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            From surveys to signups, power your workflow with an easy builder
            and real-time analytics.
          </p>

          {/* Sub-features */}
          <ul className="mt-8 space-y-4 text-left">
            <li className="flex items-start gap-3">
              <span className="text-blue-600">
                <Check />
              </span>
              <span>Create and publish in under 5 minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600">
                <Check />
              </span>
              <span>Conditional logic & advanced fields</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600">
                <Check />
              </span>
              <span>Export responses or integrate with your workflow</span>
            </li>
          </ul>

          {/* CTA button */}
          <div className="mt-8">
            <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
