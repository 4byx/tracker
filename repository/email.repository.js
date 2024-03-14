import {EmailLog} from '../models/index.js'

export class EmailRepository {
    constructor(){}
    async create(data) {
        try {
            await EmailLog.create(data);
        } catch (error) {
            console.log("something wrong in repository layer");
            throw error;
        }
    }

    async update(data) {
        try {
            await EmailLog.updateOne({
                uuid : data.uuid
            },data);
            console.log("updated");
        } catch (error) {
            throw error;
        }

    }
}