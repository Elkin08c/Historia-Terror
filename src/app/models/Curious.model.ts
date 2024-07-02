export class Curious1 {
        private storyIndex: number = 0;
        private storyParts: string[] =[
            'Este es el rol representa  a la curiosidad del peanton por saber que paso'
        ]
    constructor(
    public name: string,
    public alias: string,
    public age: string[],
    public city: string
    ) {}  
}


export class Curious2 {
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