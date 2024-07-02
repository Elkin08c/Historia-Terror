export class Nurse1 {
        private storyIndex: number = 0;
        private storyParts: string[] =[
            'Este es el rol reprezenyta a la enfermera que cometio el omicidio'
        ]
    constructor(
    public name: string = 'Elkin'
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


export class Nurse2 {
    private storyIndex: number = 0;
    private storyParts: string[] =[
        'Este es el rol principal de la historia'
    ]
        constructor(
        public name: string = 'Pedro'
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