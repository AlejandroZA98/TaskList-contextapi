export type Users={
    id:number,
    name:string,
}
export type Categories={
    id:number,
    name:string
}
export type Status={
    id:number,
    name:string}

export type Task={
    id:string,
    taskName:string,
    user:number,
    status:string
    create_date:Date
    finish_date:Value
 }
 export type ValuePice=Date|null
export type Value= ValuePice|[ValuePice, ValuePice];
