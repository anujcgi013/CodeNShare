import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {GeneralinfoComponent} from './generalinfo/generalinfo.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  public spplierDetails: any;
 // public generalDetails: any;

  constructor() {
  }

  @ViewChild(GeneralinfoComponent)
  private generalinfoComponent: GeneralinfoComponent;

  ngOnInit() {
  }

  updateRef() {
    this.generalinfoComponent.generalDetails = this.spplierDetails.generalInfo;
  }
}
