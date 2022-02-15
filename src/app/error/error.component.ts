import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bch-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bch-error' }
})
export class ErrorComponent {

  readonly MESSAGE_PARAM = 'msg';
  readonly STATUS_PARAM = 'status';

  errorCode: string;
  message: string;


  constructor(
    private _route: ActivatedRoute
  ) {
    this.errorCode = this._route.snapshot.queryParamMap.get(this.STATUS_PARAM) || 'Unknown';
    this.message = this._route.snapshot.queryParamMap.get(
      this.MESSAGE_PARAM) || 'An error occurred within the application.';
  }

}
