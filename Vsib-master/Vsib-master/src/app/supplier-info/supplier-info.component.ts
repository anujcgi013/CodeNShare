import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {SupplierInfoService} from './supplier/supplier-info.service';
import {SupplierComponent} from './supplier/supplier.component';

const states = ['Alabama', '18 Ganesh', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

/*states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))*/

const x: Array<any> = [
  {
    'name': 'ganesh 18',
    'id': '18'
  }
];

@Component({
  selector: 'app-supplier-info',
  templateUrl: './supplier-info.component.html',
  styleUrls: ['./supplier-info.component.scss']
})
export class SupplierInfoComponent implements OnInit {
  showDetails = false;
  showLabel = false;
  errorMsg = '';

  @ViewChild(SupplierComponent)
  private supplierComponent: SupplierComponent;

  constructor(private _svc: SupplierInfoService) {

  }

  public model: any;
  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : x.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).map((x: any) => x.name).slice(0, 10))
    );

  ngOnInit() {

  }

  getDetails() {
    if (this.model) {
      this.errorMsg = '';
      let id = x.filter((a) => a.name === this.model).length > 0 ?
        x.filter((a) => a.name === this.model)[0].id : '';
      this._svc.getSupplierDetails(id).subscribe((res: any) => {
        this.updateChild(res);
      }, (error: any) => {
        this.errorMsg = `There is no supplier exist with ${this.model}`;
        this.showDetails = false;
      });
      this.showLabel = false;
    } else {
      this.showLabel = true;
      this.showDetails = false;
    }
  }

  updateChild(res): void {
    this.supplierComponent.spplierDetails = res;
    this.supplierComponent.updateRef();
    this.showDetails = true;
  }
}
