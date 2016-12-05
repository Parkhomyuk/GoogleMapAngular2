export class Init{
  load(){
    if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
      console.log('No markers found....creating...');
      var markers=[
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
          name:'City 5',
          lat: 32.08088,
          lng:  34.78057,
          draggable:true
        }
      ];
      localStorage.setItem('markers', JSON.stringify(markers));
    } else {
      console.log('Loading markers...');
    }
  }
}
