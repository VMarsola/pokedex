export const types = {
    SHOW_LOADER: "SHOW_LOADER",
    HIDE_LOADER: "HIDE_LOADER"
}

export const actions = {
    showLoader: () => ({
        type: types.SHOW_LOADER
    }),
    hideLoader: () => ({
        type: types.HIDE_LOADER
    })
}

const INITIAL_STATE = false
export const reducer = (state = INITIAL_STATE, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case types.SHOW_LOADER:
            newState = true
            break
        case types.HIDE_LOADER:
            newState = false
            break
        default:
            console.log("DEFAULT")
            break
    }

    return newState
}