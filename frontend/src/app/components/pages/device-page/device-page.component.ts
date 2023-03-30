import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/shared/models/Device';

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.component.html',
  styleUrls: ['./device-page.component.css']
})
export class DevicePageComponent implements OnInit {
  device!: Device;
  constructor(activatedRoute:ActivatedRoute, deviceService: DeviceService){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        this.device = deviceService.getDeviceById(params.id);
    });
  }
  ngOnInit(): void {
  }

}
