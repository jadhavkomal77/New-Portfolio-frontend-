import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const projectApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/admin/project}` }),
    tagTypes: ["project"],
    endpoints: (builder) => {
        return {
            getProject: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["project"]
            }),
            addProjects: builder.mutation({
                query: userData => {
                    return {
                        url: "/add-projects",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["project"]
            }),
            updateProjects: builder.mutation({
                query: userData => {
                    return {
                        url: `/update-projects/:userId/${userData._id}`,
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["project"]
            }),
            deleteProjects: builder.mutation({
                query: id => {
                    return {
                        url: `/delete-projects/:userId/${id}`,
                        method: "DELETE",
                        // body: userData
                    }
                },
                invalidatesTags: ["project"]
            }),

        }
    }
})

export const { useGetProjectQuery, useAddProjectsMutation, useUpdateProjectsMutation, useDeleteProjectsMutation } = projectApi
