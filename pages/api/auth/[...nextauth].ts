import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    EmailProvider({


    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/Landing', // Displays form with sign out button
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // Used for check email page
    newUser: null // If set, new users will be directed here on first sign in
  },
  callbacks: {
    // jwt({ token, user }) {
    //   if (user) {
    //     token.id = user.id;
    //   }
    //   return token;
    // },
    // session({ session, token }) {
    //       if (token) {
    //         session.id = token.id;
    //       }
    //       return session; // The return type will match the one returned in `useSession()`
    //     },  
    // }
    // secret: 'secret',
    // jwt: {
    //   secret: 'secret',
    //   encryption: true,
  }
});