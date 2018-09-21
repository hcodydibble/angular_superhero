import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {id: 2, name: 'Mr. Nice'},
            {id: 3, name: 'Rapid Agent'},
            {id: 4, name: 'Macho Baron'},
            {id: 5, name: 'Gigantic Detective'},
            {id: 6, name: 'Dark Gladiator'},
            {id: 7, name: 'Professor Racoon'},
            {id: 8, name: 'Iron Mothman'},
            {id: 9, name: 'Warden Cleaver'},
            {id: 10, name: 'Nimble Snipe'},
            {id: 11, name: 'Iron Archer'},
            {id: 12, name: 'Scarlet King'}
            ];
            return {heroes};
    }
}