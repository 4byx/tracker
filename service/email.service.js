import { EmailRepository } from "../repository/email.repository.js";


export class EmailService {
    constructor() {
        this.emailRepository = new EmailRepository();
    }

    async createLog(data) {
        try {
            await this.emailRepository.create(data);
        } catch (error) {
            throw error;
            
        }

    }
    
    async updateLog(data) {
        try {
            await this.emailRepository.update(data);
        } catch (error) {
            throw error;
            
        }
       
    }

    
}