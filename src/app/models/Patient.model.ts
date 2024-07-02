export class Patient1 {
        private storyIndex: number = 0;
        private storyParts: string[] =[
            'Este es el rol es el paciente que nota cosas extranas dentro del manicomio'
        ]

    constructor(
    public name: string,
    public alias: string,
    public age: string[],
    public city: string
    ) {}
}



export class Patient2 {
    private storyIndex: number = 0;
    private storyParts: string[] =[
        'Este es el rol principal de la historia'
    ]
    
        constructor(
        public name: string,
        public alias: string,
        public age: string[],
        ) {}
    }