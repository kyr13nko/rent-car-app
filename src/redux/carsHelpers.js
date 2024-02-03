export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = (state, { payload }) => {
  state.items = state.items[0]?.id === payload[0]?.id ? payload : [...state.items, ...payload];
  state.isLoading = false;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
