export interface IuserSchema {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
}

export interface ItaskFlowBranchTodosSchema {
    name: string,
    userId: string,
}

export interface ItaskFlowIndiviualTodosSchema {
    title: string,
    branchId: string,
    todos: Array<string>,
}