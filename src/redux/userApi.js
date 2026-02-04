import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/admin` }),
    tagTypes: ["users"],
    endpoints: (builder) => {
        return {
            sendemail: builder.mutation({
                query: userData => {
                    return {
                        url: "/send-email",
                        method: "POST",
                        body: userData
                    }
                },
                providesTags: ["users"]
            }),


        }
    }
})

export const { useSendemailMutation } = userApi
