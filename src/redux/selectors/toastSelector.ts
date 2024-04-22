import { createSelector } from '@reduxjs/toolkit';

import { ToastState } from '../slices/toastSlice';
import { RootState } from '../store';

const selectToastState = (state: RootState): ToastState => state.toast;

export const selectToast = createSelector(selectToastState, (toastState) => toastState);
