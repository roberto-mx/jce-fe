import { ProviderService } from './../../../../build/backend-api/api/provider.service';
import { Component, OnInit, Input } from '@angular/core';
import { Provider } from 'build/backend-api';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-selected-provider',
  templateUrl: './selected-provider.component.html',
  styleUrls: ['./selected-provider.component.css']
})
export class SelectedProviderComponent implements OnInit {
  provider : Provider;

  selectedProvider: any;

  constructor(private route: ActivatedRoute, private _providerService: ProviderService) {}

  ngOnInit(): void {
    this.route.params.subscribe(data => this.selectedProvider = data);
    this._providerService.getProviderById(this.selectedProvider).subscribe(data => this.provider = data);
  }

  ngOnChanges() {
    console.log(this.selectedProvider);
    this._providerService.getProviderById(this.selectedProvider).subscribe(data => this.provider = data);
  }

}
