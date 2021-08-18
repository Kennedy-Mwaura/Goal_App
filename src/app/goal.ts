export class Goal {
    id: number;
    name: string;
    description: string;
    showDescription: boolean;
    completeDate = new Date; 

    constructor(id: number, name: string, description: string, completeDate: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.showDescription = false;
        this.completeDate = completeDate;
    };
}
