export interface TestsItems {
    id: string
    title:string
    questions:TestQuestion[]
}

export interface TestQuestion {
            title:string,
            variants:[{
                id:string,
                title:string,
                count:number
            },
            {
                id:string,
                title:string,
                count:number
            },
            {
                id:string,
                title:string,
                count:number
            }
        ]
        
}