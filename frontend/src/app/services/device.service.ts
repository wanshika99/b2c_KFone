import { Injectable } from '@angular/core';
import { sample_devices, sample_tags } from 'src/data';
import { Device } from '../shared/models/Device';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DEVICES_BY_ID_URL, DEVICES_BY_SEARCH_URL, DEVICES_BY_TAG_URL, DEVICES_TAGS_URL, DEVICES_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Device[]> {
    return this.http.get<Device[]>(DEVICES_URL);
  }

  getAllDeviceBySearchTerm(searchTerm:string) {
    return this.http.get<Device[]>(DEVICES_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(DEVICES_TAGS_URL);
  }

  getAllDeviceByTag(tag:string):Observable<Device[]> {
    return tag == 'All'?
    this.getAll():
    this.http.get<Device[]>(DEVICES_BY_TAG_URL + tag);
  }

  getDeviceById(deviceId:string):Observable<Device>{
    return this.http.get<Device>(DEVICES_BY_ID_URL + deviceId);
  }
}
