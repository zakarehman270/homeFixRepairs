import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const MyApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    // getPosts: builder.query({ query: () => "/auth/login" }),
    Login: builder.mutation({
      query: (LoginData) => ({
        url: "/auth/login",
        method: "POST",
        body: LoginData,
      }),
    }),
    SignUp: builder.mutation({
      query: (SignUpData) => ({
        url: "/auth/register",
        method: "POST",
        body: SignUpData,
      }),
    }),
    getEvent: builder.query({
      query: () => ({
        url: `/events/`,
        method: "GET",
      }),
    }),
    getResource: builder.query({
      query: () => ({
        url: `/resources/`,
        method: "GET",
      }),
    }),
  }),
});
export const { useLoginMutation, useSignUpMutation ,useGetEventQuery,useGetResourceQuery} = MyApi;
