import localForage from "localforage";

export class InMemory {
    private static instance: InMemory;
    private _db: LocalForage;

    private constructor(){
        this._db = localForage.createInstance({
            name: "offline-container"
        })
    }

    get db(): LocalForage {
        return this._db;
    }

    public static getInstance(): InMemory {
        if(!this.instance) {
            this.instance = new InMemory();
        }
        return InMemory.instance
    }
}
