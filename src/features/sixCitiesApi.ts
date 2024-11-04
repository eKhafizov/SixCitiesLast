import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {NameSpace} from '../utils/nameSpace';
import {getToken, removeToken, saveToken} from '../utils/token';
import {CommentServerType, OffersArray} from '../types/types';
import {ServerResponse} from 'node:http';
import {getAuth} from '../store/serverData/serverData';
import {getUserInfo} from '../store/userActivity/userActivity';

export const sixCitiesApi = createApi({
  reducerPath: NameSpace.sixCitiesApi,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://13.react.htmlacademy.pro/six-cities',
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('x-token', `${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['OFFERS', 'NEARBY', 'FAVORITES', 'COMMENTS'],
  endpoints: (builder) => ({
    //queries
    getOffers: builder.query<OffersArray,void>({
      query: () => '/offers',
      providesTags: ['OFFERS'],
    }),
    getNearbyOffers: builder.query<OffersArray, number>({
      query: (id: number) => `/offers/${id}/nearby`,
      providesTags: ['FAVORITES']
    }),
    getComments: builder.query<CommentServerType[], number>({
      query: (id: number) => `/comments/${id}`,
      providesTags: ['COMMENTS']
    }),

    //mutations
    fetchAddComment: builder.mutation<void, {id: number; comment: string; rating: number}>({
      query: ({id, comment, rating}) => ({
        url: `/comments/${id}`,
        method: 'POST',
        body: ({comment, rating})
      }),
      invalidatesTags: ['COMMENTS']
    }),
    fetchAddFavorite: builder.mutation<ServerResponse, number>({
      query: (id: number) => ({
        url: `favorite/${id}/1`,
        method: 'POST',
      }),
      invalidatesTags: ['FAVORITES']
    }),
    fetchRemoveFavorite: builder.mutation<ServerResponse, number>({
      query: (id: number) => ({
        url: `favorite/${id}/0`,
        method: 'POST',
      }),
      invalidatesTags: ['FAVORITES']
    }),

    //authentication
    fetchLogin: builder.mutation<{id: number; email: string; token: string}, {email: string; password: string}>({
      query: ({email, password}) => ({
        url: '/login',
        method: 'POST',
        body: ({email, password})
      }),
      async onQueryStarted({email, password}, {dispatch, queryFulfilled}) {
        const {data: {token}} = await queryFulfilled;
        saveToken(token);
        dispatch(getAuth('AUTH'));
        dispatch(getUserInfo(`${email}`));
      },
    }),
    fetchLogout: builder.mutation<void,void>({
      query: () => ({
        url: '/logout',
        method: 'DELETE',
      }),
      async onQueryStarted(_arg, {dispatch, queryFulfilled}) {
        await queryFulfilled;
        removeToken();
        dispatch(getAuth('NO_AUTH'));
        dispatch(getUserInfo(undefined));
      }
    })
  }),
});

export const {
  useGetOffersQuery,
  useGetNearbyOffersQuery,
  useGetCommentsQuery,
  useFetchLogoutMutation,
  useFetchLoginMutation,
  useFetchAddCommentMutation,
  useFetchRemoveFavoriteMutation,
  useFetchAddFavoriteMutation
} = sixCitiesApi;


