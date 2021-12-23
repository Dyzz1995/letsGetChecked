import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  public isLoading: boolean = true;

  constructor(private spinnerService: SpinnerService) {}

  public ngOnInit(): void {
    this.spinnerService.isLoading$.pipe(delay(0)).subscribe((loading) => {
      this.isLoading = loading;
    });
  }
}
