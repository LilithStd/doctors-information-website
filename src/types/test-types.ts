export interface TestsItems {
    id: string
    title:string
    questions:TestQuestion[]
}

export interface TestQuestion {
            title:string,
            variants:[{
                first:string,
                count:number
            },
            {
                second:string,
                count:number
            },
            {
                third:string,
                count:number
            }
        ]
        
}