import { nanoid } from "nanoid";

export const addTask = text => {
    return {
        type: "tasks/addTask",
        payload: {
            id: nanoid(),
            completed: false,
            text,
        },
    };
};

export const deleteTask = taskId => {
    return {
        type: "taks/deleteTask",
        payload: taskId,
    };
};

export const toggleCompleted = taskId => {
    return {
        type: "taks/toggleCompleted",
        payload: taskId,
    };
};

export const setStatusFilter = value => {
    return {
        type: "filters/setStatusFilter",
        payload: value,
    };
};