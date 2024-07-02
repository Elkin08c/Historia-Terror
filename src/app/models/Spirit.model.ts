export class Spirit1 {
        private storyIndex: number = 0;
        private storyParts: string[] =[
            'Este es el rol del espirituo que se intenta comunicar con las demas peronas'
        ]

    constructor(
    public name: string,
    public alias: string,
    public age: string[],
    public city: string
    ) {}
}




export class Spirit2 {
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