import NextAuth from "next-auth";

export type UserId = string;

export type UserEntity = {
    id: UserId;
    email: string;
    role: Role;
    emailVerified?: Date | null;
    name?: string | null;
    image?: string | null;
  };
  
  export type SessionEntity = {
    user: {
      id: UserId;
      email: string;
      role: Role;
      name?: string | null;
      image?: string | null;
    };
    expires: string;
  };