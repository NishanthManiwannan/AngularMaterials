import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  
  title = 'material-demo';
  opened = false;
  
  log(states){
    console.log(states)
  }

  //------- AutoComplete -----------
  options : string[] = ['Angular','React','Vue'];
  objectOptions = [
    {name : 'Angular'},
    {name : 'Angular Material'},
    {name : 'React'},
    {name : 'Vue'}
  ]

  //---------- SnackBar ----------
  
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message,Dissmiss){
    let snackBarRef =  this.snackBar
    .open(message,Dissmiss,{duration: 2000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log("Snack bar was dismiss")
    })

    snackBarRef.onAction().subscribe(() =>{
      console.log("Snack bar action was dismiss")
    })
  }

  // openCus(){
  //   this.snackBar.openFromComponent(CustomerSnackBarCom, {duration : 2000})
  // }
}

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class CustomerSnackBarCom {

// }