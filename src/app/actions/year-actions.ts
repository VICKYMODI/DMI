export const YEAR_LIST_REQUEST = 'year list requested';
export const YEAR_LIST_SUCCESS = 'year list success';
export const YEAR_LIST_FAILED = 'year list failed';

export class YearListRequestAction {
    readonly type = YEAR_LIST_REQUEST;
}

export class YearListsSuccessAction {

    readonly type = YEAR_LIST_SUCCESS;

    constructor(public payload?:{data : any[]}){

    }
}

