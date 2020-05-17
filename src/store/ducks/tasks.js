export const types = {
    ADD_TASK: "ADD_TASK",
    GET_TASK: "GET_TASK",
    GET_TASK_SUCCESS: "GET_TASK_SUCCESS"
}

export const actions = {
    addTask: (name) => ({
        type: types.ADD_TASK,
        name: name
    }),
    getTasks: () => ({
        type: types.GET_TASK
    }),
    getTasksSuccess: (list) => ({
        type: types.GET_TASK_SUCCESS,
        list: list
    })
}

const INITIAL_STATE = []
export const reducer = (state = INITIAL_STATE, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    console.log("action", action)

    switch (action.type) {
        case types.ADD_TASK:
            console.log("Executa ADD TASK")
            newState.push(action.name)
            break
        case types.GET_TASK_SUCCESS:
            newState = action.list
            break
        default:
            console.log("DEFAULT")
            break
    }

    return newState
}