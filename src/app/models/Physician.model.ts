export class Physician1 {
        private storyIndex: number = 0;
        private storyParts: string[] =[
            'Este rol es del medico que trataba mal al pasiente fallecido'
        ]

    constructor(
    public name: string,
    public alias: string,
    public age: string[],
    public city: string
    ) {}
}





export class Physician2 {
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