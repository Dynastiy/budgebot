import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { finalize } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';




@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage {
  constructor(public http: HttpClient) {
    this.getUsersList()
  }
  usersList:any[]=[]
  async getUsersList()
  {
    
    this.http.get('https://api.paystack.co/bank').subscribe(data=>{
      this.usersList=data["data"]
    })
  }


}
