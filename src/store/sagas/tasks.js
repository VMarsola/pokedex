// import { put, call, takeEvery, takeLatest } from "redux-saga/effects";
// import {
//     getTasks as getTasksApi,
//     addTask as addTaskApi
// } from 'store/apis/taskApi'
// import {
//     types as typesTasksDuck,
//     actions as actionsTasksDuck
// } from "store/ducks/tasks"
// import {
//     actions as actionsLoaderDuck
// } from "store/ducks/loader"

// function* loadAllTasks() {
//     yield put(actionsLoaderDuck.showLoader())

//     try {
//         const tasks = yield call(getTasksApi)

//         let list = []
//         tasks.map(item => list.push(item.name))

//         yield put(actionsTasksDuck.getTasksSuccess(list))
//         yield put(actionsLoaderDuck.hideLoader())
//     } catch (error) {
//         yield put(actionsLoaderDuck.hideLoader())
//         console.log("Algo deu ruim!")
//     }
// }

// function* addNewTask(data) {
//     yield put(actionsLoaderDuck.showLoader())

//     try {
//         yield call(addTaskApi, data.name)
//         yield put(actionsLoaderDuck.hideLoader())
//     } catch (error) {
//         yield put(actionsLoaderDuck.hideLoader())
//         console.log("Algo deu ruim!")
//     }
// }

// export default [
//     takeEvery(typesTasksDuck.GET_TASK, loadAllTasks),
//     takeLatest(typesTasksDuck.ADD_TASK, addNewTask)
// ]