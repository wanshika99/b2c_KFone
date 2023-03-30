import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent implements OnInit {
  tags?: Tag[];
  constructor(deviceservice:DeviceService){
    this.tags =deviceservice.getAllTags();
  }
  ngOnInit(): void {
  }

}
