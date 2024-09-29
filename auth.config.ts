import NextAuth, { User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "username", type: "username", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (credentials.username && credentials.password) {
          const username = process.env.BASIC_AUTH_USERNAME;
          const password = process.env.BASIC_AUTH_PASSWORD;
          if (
            credentials.username === username &&
            credentials.password === password
          ) {
            return { name: credentials.username } as NextAuthUser;
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, // 1 day,
  },
  debug: process.env.NODE_ENV === "development",
  trustHost: true,
});
