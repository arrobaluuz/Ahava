import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  register={
          name:'',
          email:'',
          password:''
  }
  widthImg = 10;
  title = 'Ahava';
  name = 'Luz';
  person ={
    name:'Luz',
    age: 22,
    avatar:'./assets/img/platano.png'
  }

  names = ['Nico', 'Sandra', 'Veronica']

  products: Product[]=[
    {
      name: 'Delfin',
      price: 50,
      image: './assets/img/delfin.jpeg',
      category:'Senecio'
    },
    {
      name: 'Dragon',
      price: 90,
      image: './assets/img/dragon.jpg',
      category:'Senecio'
    },
    {
      name: 'Furesei',
      price: 60,
      image: './assets/img/furesei.jfif'
    },
    {
      name: 'Platano',
      price: 80,
      image: './assets/img/platano.png'
    },
    {
      name: 'Rosario',
      price: 90,
      image: './assets/img/rosario.jfif'
    },
    {
      name: 'Zebra',
      price: 130,
      image: './assets/img/zebra.jfif'
    }
  ];

  box = {
    width:100,
    height:100,
    background: 'red'
  };

  onRegister(){
    console.log(this.register)
  }
}
