export interface Job {
    name: string;
    id: string;
    description: string;
}

export class NewColonist {
    name: string;
    age: string;
    job_id: string;
    constructor(
        name: string, 
        age: string, 
        job_id: string
    ) 
    {
        this.name = name;
        this.age = age;
        this.job_id = job_id;
    }
}

export class NewEncounter {
    atype: string;
    date: string;
    action: string;
    colonist_id: string;
    constructor(
        atype: string,
        date: string,
        action: string,
        colonist_id: string
    )
    {
        this.atype = atype;
        this.date = date;
        this.action = action;
        this.colonist_id = colonist_id;
    }
}

export interface Colonist {
    name: string;
    age: number;
    id: number;
    job: Job;
}

export interface Encounter {
    id: number;
    atype: string;
    date: number;
    action: string;
    colonistId: number;
}

export interface Aliens {
    type: string;
    submitted_by: string;
    id: number;
    description: string;
}

