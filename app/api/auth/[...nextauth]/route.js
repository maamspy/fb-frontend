// app/api/auth/[...nextauth]/route.js

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        try {
          // backend login API
          const response = await axios.post(
            `${process.env.BACKEND_URL}/api/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          const data = response.data;

          if (data.success && data.data) {
            return {
              email: data.data.email,
              role: data.data.role,
              token: data.data.token,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error('Login error:', error.response?.data || error.message);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
