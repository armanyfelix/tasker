import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { collection, query, getDocs, where, limit, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

const firebaseClient:any = {
  db,
  collection,
  query,
  getDocs,
  where,
  limit,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc
}


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // ...add more providers here
  ],
  adapter: FirebaseAdapter(firebaseClient),
  pages: {
    signIn: '/auth/signin',
    signOut: '/landing', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  secret: process.env.JWT_SECRET,

  session: {
    strategy: "jwt",
  },

  // jwt: {
  //   // A secret to use for key generation. Defaults to the top-level `session`.
  //   secret: process.env.JWT_SECRET,
  //   // The maximum age of the NextAuth.js issued JWT in seconds.
  //   // maxAge: 60 * 60 * 24 * 30,

  //   encryption: true,
  //   // You can define your own encode/decode functions for signing and encryption
  //   // if you want to override the default behaviour.
  //   async encode({ secret, token }) { },
  //   async decode({ secret, token }) { },
  // }

  // callbacks: {
  //   // jwt({ token, user }) {
  //   //   if (user) {
  //   //     token.id = user.id;
  //   //   }
  //   //   return token;
  //   // },
  //   // session({ session, token }) {
  //   //       if (token) {
  //   //         session.id = token.id;
  //   //       }
  //   //       return session; // The return type will match the one returned in `useSession()`
  //   //     },  
  //   // }
  //   // secret: 'secret',


  // }
});