export class Researcher1 {
        private storyIndex: number = 0;
        private storyParts: string[] =[
            'Este rol juega en el papel de investigador el que se encarga de descubrir toda la verdad'
        ]

    constructor(
    public name: string = 'Cristina'
    ) {}

    introduce(): string {
        return this.storyParts[0];
      }
    
      displayDescription(): string {
        if (this.storyIndex >= 1) {
          return this.storyParts[1];
        } else {
          return '';
        }
      }
    
      displayIllegalActivities(): string {
        if (this.storyIndex >= 2) {
          return this.storyParts[2];
        } else {
          return '';
        }
      }
    
      displayNextPart(): string {
        if (this.storyIndex < this.storyParts.length) {
          return this.storyParts[this.storyIndex++];
        } else {
          return 'Fin de la historia.';
        }
      }
    
      resetStoryIndex(): void {
        this.storyIndex = 0;
      }
}



export class Researcher2 {
    private storyIndex: number = 0;
    private storyParts: string[] =[
        'Este es el rol principal de la historia'
    ]

        constructor(
        public name: string = 'Patricio'
        ) {}

        introduce(): string {
            return this.storyParts[0];
          }
        
          displayDescription(): string {
            if (this.storyIndex >= 1) {
              return this.storyParts[1];
            } else {
              return '';
            }
          }
        
          displayIllegalActivities(): string {
            if (this.storyIndex >= 2) {
              return this.storyParts[2];
            } else {
              return '';
            }
          }
        
          displayNextPart(): string {
            if (this.storyIndex < this.storyParts.length) {
              return this.storyParts[this.storyIndex++];
            } else {
              return 'Fin de la historia.';
            }
          }
        
          resetStoryIndex(): void {
            this.storyIndex = 0;
          }
    }