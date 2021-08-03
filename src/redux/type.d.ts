export interface TodoInterface {
    _id : string
    title : string
    active_state : boolean
    end_date : string
}

export interface Store {
    todos : TodoInterface[];
    loading : boolean
}

