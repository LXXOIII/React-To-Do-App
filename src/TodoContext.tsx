import React, { createContext, useContext } from 'react'

export type TodosType = {
    id: string;
    text: string;
}


export type TodosInitialState = {
    todos: TodosType[];
}


const todosInitialState: TodosInitialState = {
    todos: []
}


const TodosContext = createContext<{ state: TodosInitialState; dispatch: React.Dispatch<any> }>({ state: todosInitialState, dispatch: () => null })

export const createTodosCtx = () => {
    function useTodosCtx() {
        const c = useContext(TodosContext)
        if (c === undefined) {
            throw new Error('useTodosCtx must be inside a Provider with a value')
        } else {
            return c
        }
    }
    return [useTodosCtx, TodosContext.Provider, todosInitialState] as const
}



