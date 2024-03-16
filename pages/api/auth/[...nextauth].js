import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter your email" },
        password: { label: "Password", type: "password", placeholder: "Enter your password" },
      },
      authorize: async (credentials) => {
        // Your predefined user credentials
        const user = {
          id: 1,
          name: "User",
          email: "admin@example.com",
          // Replace this with the bcrypt hash of your predefined password
          passwordHash: "$2a$10$K4FkMlGH9K0niZz5vo9U7ukXVS8J.PoziHTd16lVqtL7mnipnUI9S",
        };

        if (credentials && credentials.email === user.email) {
          // Here we check if the password provided matches the predefined password hash
          const isValid = bcrypt.compareSync(credentials.password, user.passwordHash);

          if (isValid) {
            // If authentication is successful, return the user object (without the password hash)
            const { passwordHash, ...userWithoutPassword } = user;
            return userWithoutPassword;
          }
        }

        // If authentication fails, return null
        return null;
      }
    }),
  ],
  // Define custom pages if needed
  pages: {
    signIn: '/auth/signin',

  },
  events: {
    signOut: async (message) => {
      // Perform any additional actions after the user has signed out
      console.log('User signed out', message);
    },
    // ...other event handlers
  },
  callbacks: {
    session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  // Add any additional NextAuth configuration here
});