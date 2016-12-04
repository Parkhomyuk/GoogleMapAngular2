import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zoom:  number=10;
  lat: number = 32.08088;
  lng: number = 34.78057;

  markers:marker[]=[
    {
      name:'Instructors 24',
      lat: 32.81841,
      lng:  34.9885,
      draggable:true
    },
    {
      name:'Instructors 105',
      lat: 31.79213 ,
      lng: 34.64966,
      draggable:true
    },
    {
      name:'Instructors 209',
      lat: 31.76904  ,
      lng: 35.21633,
      draggable:true
    },
    {
      name:'Instructors 4',
      lat: 32.81149,
      lng:  35.11323,
      draggable:true
    }


  ];

  constructor(){}
}
// Marker Type
interface marker{
  name?:string;
  lat: number;
  lng: number;
  draggable:boolean;
}

