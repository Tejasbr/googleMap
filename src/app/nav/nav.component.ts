import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { enumValues } from 'src/environments/configuaration';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {



  tableData: any = Object.values(enumValues.tableData);
  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: "AIzaSyAre7O1WJrQY-4WCaH8FTvhL3FEluMDRHA",
      // version: "weekly",
      // ...this.additionalOptions,
    });
   
    loader.load().then(() => {
      // let map:google.maps.Map;
      new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 51.2333334, lng: 6.783333 },
        zoom: 8,
      });
    });
  }

}
