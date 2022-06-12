import { LocalStorageDataServiceService } from "./local-storage-data-service.service";
import { ContactKey } from '../interfaces/contact';

export class ContactService extends LocalStorageDataServiceService {
    key: string;


  
    constructor() {
      super();
  
      this.key = ContactKey;

    }

}