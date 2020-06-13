import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../../../services/api.service';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit {
  public categories = [];
  public subcategories = [];
  public subcategoriesTotal = [];

  selectedCategory = 0;
  constructor(private router: Router,  private api: ApiService) { }

  changeCategory(newValue) {
    this.categories.forEach((category, index) => {
      if (newValue === category) {
        this.selectedCategory = index;
      }
    });
    this.subcategories = this.subcategoriesTotal[this.selectedCategory];
  }

  ngOnInit(): void {

    this.api.getCategories$().subscribe(
      (res) => {
        console.log(res);
        res.forEach((category, index) => {
          this.categories.push(category.name);
          this.subcategoriesTotal.push(category.subcategories);
        });
      }
    );
  }

  onSubmit(f: NgForm) {
    console.log(f);
    localStorage.setItem('categoriaForm', f.value.categoria);
    localStorage.setItem('subcategoriaForm', f.value.subcategoria);
    localStorage.setItem('altoForm', f.value.alto);
    localStorage.setItem('pesoForm', f.value.peso);
    localStorage.setItem('anchoForm', f.value.ancho);
    localStorage.setItem('largoForm', f.value.largo);
    this.router.navigateByUrl('/user/nueva-orden/2');
  }

}
