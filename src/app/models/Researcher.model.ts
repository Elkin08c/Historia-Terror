export class Researcher1 {
        private storyIndex: number = 0;
        private storyParts: string[] =[
            'Este rol juega en el papel de investigador el que se encarga de descubrir toda la verdad'
        ]

    constructor(
    public name: string,
    public alias: string,
    public age: string[],
    public city: string
    ) {}
}



export class Researcher2 {
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