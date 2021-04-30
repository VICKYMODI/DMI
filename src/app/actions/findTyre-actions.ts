export const YEAR_LIST_REQUEST = 'year list requested';
export const YEAR_LIST_SUCCESS = 'year list success';
export const YEAR_LIST_FAILED = 'year list failed';


export const MAKE_LIST_REQUEST = 'make list requested';
export const MAKE_LIST_SUCCESS = 'make list success';
export const MAKE_LIST_FAILED = 'make list failed';

export const MODEL_LIST_REQUEST = 'model list requested';
export const MODEL_LIST_SUCCESS = 'model list success';
export const MODEL_LIST_FAILED = 'model list failed';

export const TRIM_LIST_REQUEST = 'trim list requested';
export const TRIM_LIST_SUCCESS = 'trim list success';
export const TRIM_LIST_FAILED = 'trim list failed';


export class MakeListRequestAction {
    readonly type = MAKE_LIST_REQUEST;
}

export class ModelListRequestAction {
    readonly type = MODEL_LIST_REQUEST;
}

export class TrimListRequestAction {
    readonly type = TRIM_LIST_REQUEST;
}

export class YearListRequestAction {
    readonly type = YEAR_LIST_REQUEST;
}

export class YearListsSuccessAction {

    readonly type = YEAR_LIST_SUCCESS;

    constructor(private payload?:{data : any[]}){

    }
}

export class MakeListsSuccessAction {

    readonly type = MAKE_LIST_SUCCESS;

    constructor(private payload?:{data : any[]}){

    }
}

export class ModelListsSuccessAction {

    readonly type = MODEL_LIST_SUCCESS;

    constructor(private payload?:{data : any[]}){

    }
}

export class TrimListsSuccessAction {

    readonly type = TRIM_LIST_SUCCESS;

    constructor(private payload?:{data : any[]}){

    }
}

