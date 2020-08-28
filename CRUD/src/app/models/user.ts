import {Title} from '@angular/platform-browser';
import { Timestamp } from 'rxjs';

export interface User {
  id?: number;
  Nombre ?: string;
  Apellido ?: string;
  Telefono ?: number;
  Email ?: string;
  Direccion ?: string;
  created_at ?: Timestamp;

}
