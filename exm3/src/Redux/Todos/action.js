
export const GET_ALL_LATEST_TODOS_LOADING = "GET_ALL_LATEST_TODOS_LOADING";
export const GET_ALL_LATEST_TODOS_SUCCESS = "GET_ALL_LATEST_TODOS_SUCCESS";
export const GET_ALL_LATEST_TODOS_FAILURE = "GET_ALL_LATEST_TODOS_FAILURE";

export const getAllLatestTodosLoading = () =>({
        type : GET_ALL_LATEST_TODOS_LOADING,
    });

export const getAllLatestTodosSuccess = (payload) =>({
        type : GET_ALL_LATEST_TODOS_SUCCESS,
        payload
    });

export const getAllLatestTodosFailure = () =>({
        type : GET_ALL_LATEST_TODOS_FAILURE,
    });