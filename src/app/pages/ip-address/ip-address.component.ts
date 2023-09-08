import { Component } from '@angular/core';

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.scss']
})
export class IpAddressComponent {
  search : string = '';
  ip: string = 'IP ADDRESS IP ADDRESS';
  location: string = 'LOCATION LOCATION';
  timezone: string = 'TIMEZONE TIMEZONE';
  isp: string = 'ISP ISP ISP ISP';

  searchIp(){
    this.ip = this.search;
    console.log(this.search);
  }
}
