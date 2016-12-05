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

  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;

  markers:marker[]=[
    {
      name:'City 1',
      lat: 32.81841,
      lng:  34.9885,
      draggable:true
    },
    {
      name:'City 2',
      lat: 31.79213 ,
      lng: 34.64966,
      draggable:true
    },
    {
      name:'City 3',
      lat: 31.76904  ,
      lng: 35.21633,
      draggable:true
    },
    {
      name:'City 4',
      lat: 32.81149,
      lng:  35.11323,
      draggable:true
    }
    ,
    {
      name:'City 4',
      lat: 32.08088,
      lng:  34.78057,
      draggable:true
    }

  ];

  constructor(){}
  clickedMarker(marker: marker, index: number){
    console.log('Clicked Marker :'+marker.name+' index'+index );
  }
  mapClicked($event: any){
    var newMarker= {
      name:'untitle',
      lat:$event.coords.lat,
      lng:$event.coords.lng,
      draggable: false
    }
    this.markers.push(newMarker);
  }
  markerDragEnd(marker:any, $event:any){
    console.log('drag End',marker, $event);

    var updMarker={
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }
    var newLat=$event.coords.lat;
    var newLng=$event.coords.lng;
  }

  addMarker(){
    console.log(' add Marker');
    if(this.markerDraggable=='yes'){
      var isDraggable=true;
    }
    else{
      var isDraggable=false;
    }
    var newMarker={
      name: this.markerName,
      lat:parseFloat(this.markerLat),
      lng:parseFloat(this.markerLng),
      draggable:isDraggable
    }
    this.markers.push(newMarker);

  }
}
// Marker Type
interface marker{
  name?:string;
  lat: number;
  lng: number;
  draggable:boolean;
}

