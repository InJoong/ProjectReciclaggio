import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
