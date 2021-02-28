
export class Request {
    id: number;
    request: any;

    constructor(id: number, request: any) {
        this.id = id;
        this.request = request;
    }
}