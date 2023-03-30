import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.devices = this.deviceService.getAllDeviceBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.devices = this.deviceService.getAllDeviceByTag(params.tag);
      else
      this.devices = deviceService.getAll();
    })

  }


  ngOnInit(): void{

  }
}
