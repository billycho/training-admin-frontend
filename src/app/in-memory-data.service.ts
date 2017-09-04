import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1,  Name: 'Andi', Email: 'Andi@gmail.com' },
      { id: 2,  Name: 'Bagus', Email: 'Bagus@yahoo.com' },
      { id: 3,  Name: 'Candra', Email: 'Candra@hotmail.com' }
      
    ];
    return {users};
  }
}