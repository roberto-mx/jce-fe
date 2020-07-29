import { ProviderService } from './../../../../build/backend-api/api/provider.service';
import { Component, OnInit, Input } from '@angular/core';
import { Provider } from 'build/backend-api';
import { ActivatedRoute } from '@angular/router';

  


@Component({
  selector: 'app-service-providerslist',
  templateUrl: './service-providerslist.component.html',
  styleUrls: ['./service-providerslist.component.css']
})
export class ServiceProviderslistComponent implements OnInit {

  providers: Provider
  @Input() selectedSkill: number;
  constructor(private _providerService: ProviderService) { }

  ngOnInit(): void {
   this._providerService.getProvidersBySkillId(this.selectedSkill).subscribe(data => this.providers = data);
  }

}
