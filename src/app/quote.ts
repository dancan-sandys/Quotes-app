export class Quote {
    showQuote: Boolean;
    totalUpvotes:number;
    totalDownvotes: number;

    constructor(public name: string, public details: any, public poster:string, public date:Date) {
        this.showQuote = false;
        this.totalUpvotes = 0;
        this.totalDownvotes = 0;
    }
}
