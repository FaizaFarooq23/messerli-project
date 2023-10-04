import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials", // <- add this line
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Login',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<any> {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        // Replace this with your own logic to authenticate the user
        const user = {
          id: 1,
          name: "John Smith",
          email: "john.smith@example.com",
          image: "https://www.fillmurray.com/128/128"
        };
        // If the user is authenticated, return the user object
        // Otherwise, return null
        if (
          credentials?.username === "admin" &&
          credentials?.password === "admin"
        ) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: '/',
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60, // 1 hours
  },
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.user.name = token.name
      session.user.image = token.image
      return session
    },
  }
});