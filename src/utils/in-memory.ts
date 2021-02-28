import { Request } from './../models/request';
import PouchDB from 'pouchdb';

export class InMemory {
    private static instance: InMemory;
    private _db: PouchDB.Database;

    private constructor(){
        //TODO: need to make the name configurable to avoid conflict
        this._db = new PouchDB('offline-container');
        this.createIndex();
    }

    get db(): PouchDB.Database {
        return this._db;
        
    }

    private async createIndex() {
        await this._db.createIndex({
            index: {
                fields: ['id']
            }
        })
    }

    async saveRequest(request: Request) {
        await this._db.put(request);
    }

    public static getInstance(): InMemory {
        if(!this.instance) {
            this.instance = new InMemory();
        }
        return InMemory.instance
    }
}
