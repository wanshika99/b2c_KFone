import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/shared/models/Device';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  devices:Device[] = [];
  constructor(private deviceService:DeviceService, activatedRoute:ActivatedRoute) {
    let devicesObservable: Observable<Device[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        devicesObservable = this.deviceService.getAllDeviceBySearchTerm(params.searchTerm);
      else if(params.tag)
        devicesObservable = this.deviceService.getAllDeviceByTag(params.tag);
      else
        devicesObservable = deviceService.getAll();

        devicesObservable.subscribe((serverDevices) => {
          this.devices = serverDevices;
        })
    })

  }


  ngOnInit(): void{

  }
}
