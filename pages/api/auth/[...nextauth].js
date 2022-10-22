import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

import dbConnect from "../../../lib/db";
import User from "../../../models/user";


export default NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60,
    },
    pages: {
        signIn: '/login',
        // signOut: '/'
        // error: '/auth/error',
        // verifyRequest: '/auth/verify-request',
        // newUser: '/auth/new-user'
    },
    providers: [
        CredentialsProvider({
            name: "NT Login",
            async authorize(credentials, req) {
                await dbConnect();
                const existUser = await User.findOne({ email: credentials.email});
                if (!existUser) {
                    throw new Error("ไม่พบผู้ใช้นี้ในระบบ!");
                }
                const isValid = await existUser.comparePassword(credentials.password);
                if(!isValid){
                    throw new Error("รหัสผ่านไม่ถูกต้อง!");
                }
                console.log(existUser);
                if (existUser) {
                  return existUser
                } else {
                  return null
                }
              }
        })
    ],
    callbacks: {
        async jwt({ token, user}) {
            if(user){
                token.user = {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            }
            return token
        },
        async session({ session, token }) {
            session.user = token.user;
            return session
        }
    },
    // useSecureCookies: true
});