export interface Job {
    name: string;
    id: number;
    description: string;
}

export class newColonist {
    name: string;
    age: number;
    job_id: Job;
}

export class newEncounter {
    atype: string;
    date: number;
    action: string;
    colonist_id: number;
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
    submittedBy: number;
    id: number;
    description: string;
}

