'use client';

import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10 grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/form_builder_logo.png"
              alt="Form Builder Logo"
              width={40}
              height={40}
            />
            <span className="text-lg ml-2 font-semibold text-gray-800">
              Form Builder
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Form Builder helps organizations and small teams streamline surveys,
            registrations and more with seamless payment gateway integration to
            make data collection effortless.
          </p>
        </div>

        {/* Product */}
        <div className="md:col-span-1">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Product</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/docs" className="hover:text-blue-600">
                Docs
              </Link>
            </li>
            <li>
              <Link href="/templates" className="hover:text-blue-600">
                Templates
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-blue-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="md:col-span-1">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a
                href="https://nexaus.com.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                Nexaus
              </a>
            </li>
            <li>
              <Link href="/careers" className="hover:text-blue-600">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Stay Updated
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center mb-4"
          >
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-l-lg border border-r-0 border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 border border-blue-600 hover:border-blue-700 text-white px-4 py-2 rounded-r-lg text-sm hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>

          <h3 className="text-sm font-semibold text-gray-700 mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/privacy" className="hover:text-blue-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-600">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center text-sm text-gray-500">
          <p>2025 | Nexaus Multimedia | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
