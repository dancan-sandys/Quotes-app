export class Quote {
    showQuote: boolean;
    totalUpvotes:number;
    totalDownvotes: number;
    highest:boolean

    constructor(public name: string, public details: any, public poster:string, public date:Date) {
        this.showQuote = false;
        this.totalUpvotes = 0;
        this.totalDownvotes = 0;
        this.highest = false;
    }
}
