export class Nurse1 {
        private storyIndex: number = 0;
        private storyParts: string[] =[
            'Este es el rol reprezenyta a la enfermera que cometio el omicidio'
        ]
    constructor(
    public name: string,
    public alias: string,
    public age: string[],
    public city: string
    ) {}
}


export class Nurse2 {
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