import { Injectable } from '@angular/core';
import { sample_devices, sample_tags } from 'src/data';
import { Device } from '../shared/models/Device';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  getAll(): Device[] {
    return sample_devices;
  }

  getAllDeviceBySearchTerm(searchTerm:string){
    return this.getAll().filter(device => device.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[]{
    return sample_tags;
  }

  getAllDeviceByTag(tag:string):Device[] {
    return tag == 'All'?
    this.getAll():
    this.getAll().filter(Phones =>Phones.tags?.includes(tag));
  }

  getDeviceById(devideId:string):Device{
    return this.getAll().find(device => device.id == devideId) ?? new Device();
  }
}
