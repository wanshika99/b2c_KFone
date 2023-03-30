import { Injectable } from '@angular/core';
import { sample_devices } from 'src/data';
import { Device } from '../shared/models/Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  getAll(): Device[] {
    return sample_devices;
  }
}
