import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../services/api.service';
import {} from 'googlemaps';

@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.scss']
})
export class RouteMapComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const directionService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const mapOptions = {
      zoom: 9,
      center: {lat: 19.2839754, lng: -99.1378521}
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsRenderer.setMap(map);

    const request = {
      origin: 'Tecnologico de Monterrey CCM',
      destination: 'Palacio de Bellas Artes',
      waypoints: [
        {
          location: 'Teotihuacan',
          stopover: true
        }
      ],
      travelMode: google.maps.TravelMode.DRIVING
    };

    directionService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
      }
    }) ;

  }

}
