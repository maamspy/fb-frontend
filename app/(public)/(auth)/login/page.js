// app/(public)/(auth)/login/page.js

'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RippleButton } from '@/components/magicui/ripple-button';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError(res.error);
    } else {
      router.replace('/dashboard');
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center py-10">
      <div className="w-full max-w-md rounded-2xl bg-white px-4 py-8 md:p-8 border border-gray-200">
        <div className="mb-6 flex justify-center items-center gap-2">
          <h1 className="text-2xl font-semibold text-center text-gray-800">
            Welcome Back
          </h1>
          <Image
            src="/icons/waving-hand.svg"
            width={40}
            height={40}
            alt="Waving Hand SVG"
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              required
            />
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <RippleButton
            rippleColor="#ADD8E6"
            type="submit"
            className="w-full mt-2"
          >
            Login
          </RippleButton>
        </form>
      </div>
    </div>
  );
}
