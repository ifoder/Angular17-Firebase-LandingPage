import { User } from 'firebase/auth';
import { Barber } from './barbers.interface';
import { Service } from './service.interface';

export interface ICalendarEvent {
  id?: any;
  barber?: Barber | any;
  service?: Service | any;
  email?: string;
  phone?: string;
  firstName?: string;
  date?: any;
  user?: User | any;
}
