import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {AuthDriverService} from "../../../../services/auth-driver.service";
import {} from 'googlemaps';

@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.scss']
})
export class RouteMapComponent implements OnInit {
  constructor(private api: ApiService, private auth: AuthDriverService) { }

  ngOnInit(): void {
    const directionService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const mapOptions = {
      zoom: 9,
      center: {lat: 19.2839754, lng: -99.1378521}
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsRenderer.setMap(map);

    let driver_id = this.auth.userProfile$.source['_value'].sub;
    this.api.getOrders$("/driver/" + driver_id).subscribe(
      orders => {
        const request = {
          origin: 'Tecnologico de Monterrey CCM',
          destination: 'Tecnologico de Monterrey CCM',
          waypoints: [
          ],
          travelMode: google.maps.TravelMode.DRIVING
        };

        if (orders.length > 0) {
          request.destination = orders[orders.length - 1].address;
        }

        for (let i = 0; i < orders.length - 1; i++){
          request.waypoints.push({
            location: orders[i].address,
            stopover: true
          });
        }


        directionService.route(request, (result, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(result);
          }
        }) ;
      });



  }

}
