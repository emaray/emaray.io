import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// need to call this var tablau
// because it is referencing the tableau js library
declare var tableau: any;


@Component({
  selector: 'app-kirtlandswarblerviz',
  templateUrl: './kirtlandswarblerviz.component.html',
  styleUrls: ['./kirtlandswarblerviz.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class KirtlandswarblervizComponent implements OnInit {

  tableauViz: any

  constructor() { }

  ngOnInit() {

    var placeholderDiv = document.getElementById('tableauViz');
    //var url = 'https://public.tableau.com/profile/megan.adams#!/vizhome/KirtlandswarblerConservationeffortsandcitizenscience/KirtlandsWarblerConservationandCitizenScience?:embed=y&:display_count=yes';
    var url = 'https://public.tableau.com/views/KirtlandswarblerConservationeffortsandcitizenscience/KirtlandsWarblerConservationandCitizenScience?:embed=y&:display_count=yes';
    
    var options = {
      hideTabs: true,
      width: '1000px',
      height: '4250px',
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    this.tableauViz = new tableau.Viz(placeholderDiv, url, options);    
  }


}
