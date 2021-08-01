export interface ITodo {
    id : any | null
    title : string
    active_state : boolean
    end_date : string
}

interface TodoProps {
    todos : Todo[];
    newTodo : string
}