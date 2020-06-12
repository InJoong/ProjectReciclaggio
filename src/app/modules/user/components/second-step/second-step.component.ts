import {Component, Directive, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit {
  map: any;
  geocoder: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.geocoder = new google.maps.Geocoder();
    this.geocoder.geocode({
      address: 'Tecnologico de Monterrey CCM'
      // tslint:disable-next-line:no-unused-expression
    }), function(results, status): void {
      if (status === google.maps.GeocoderStatus.OK) {
        const myOptions = {
          zoom: 8,
          center: results[0].geometry.location,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(document.getElementById('map'), myOptions);
      }
    };
  }

  onSubmit(f: NgForm) {
    console.log(f);
    localStorage.setItem('ubicacionForm', f.value.ubicacion);

    const dias: string[] = [];

    if (f.value.lunes) { dias.push('Lunes'); }
    if (f.value.martes) { dias.push('Martes'); }
    if (f.value.miercoles) { dias.push('Miercoles'); }
    if (f.value.jueves) { dias.push('Jueves'); }
    if (f.value.viernes) { dias.push('Viernes'); }
    if (f.value.sabado) { dias.push('Sabado'); }
    if (f.value.domingo) { dias.push('Domingo'); }
    console.log(dias);
    localStorage.setItem('diasForm', dias.toString());

    this.router.navigateByUrl('/user/nueva-orden/3');
  }

}

function initMap() {
  let map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}
