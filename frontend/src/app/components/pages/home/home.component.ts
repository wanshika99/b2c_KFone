import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/shared/models/Device';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  devices:Device[] = [];
  constructor(private deviceService: DeviceService) {
    this.devices = deviceService.getAll()
  }


  ngOnInit(): void{

  }
}
