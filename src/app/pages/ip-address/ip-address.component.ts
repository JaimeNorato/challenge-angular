import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icon, Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.scss']
})
export class IpAddressComponent {
  search : string = '';
  ip: string = '8.8.8.8';
  location: string = 'LOCATION LOCATION';
  timezone: string = 'TIMEZONE TIMEZONE';
  isp: string = 'ISP ISP ISP ISP';

  map: Map | undefined;
  markerItem = marker([4.6567, -74.093]);

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.map = new Map('map').setView([51.505, -0.09], 13)
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    this.markerItem.setIcon(new Icon({
      iconUrl: 'assets/images/icon-location.svg',
    }));
    this.markerItem.addTo(this.map);
    this.updateMap();
  }

  updateMap(){
    if(this.map){
      this.map.setView(this.markerItem.getLatLng(), 13);
    }
  }

  searchIp(){
    console.log("searchIp");
    const urlIpify="https://geo.ipify.org/api/v2/country,city?apiKey=at_un4vPsJCSR7GEDOh1O3vxa5JUS3pF&ipAddress="+this.search;
    this.http.get(urlIpify).subscribe((data: any) => {
      this.ip = data.ip;
      this.location = `${data.location.city}, ${data.location.region}, ${data.location.country}`;
      this.timezone = 'UTC ' + data.location.timezone;
      this.isp = data.isp;
      this.markerItem.setLatLng([data.location.lat, data.location.lng]);
      this.updateMap();
      console.log(data);
    });
  }
}
