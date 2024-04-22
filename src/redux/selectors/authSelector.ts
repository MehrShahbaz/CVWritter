import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { AuthSliceState } from 'types/authTypes';

const selectAuthState = (state: RootState): AuthSliceState => state.auth;

export const selectIsAuthenticated = createSelector(selectAuthState, (authState) => authState.isAuthenticated);

export const selectIsAuthLoading = createSelector(selectAuthState, (authState) => authState.isAuthLoading);
