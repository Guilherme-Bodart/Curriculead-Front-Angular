import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _toastr: ToastrService) { }

  showSuccess(text) {
    this._toastr.show("<i class='fas fa-fw fa-circle-check toast-icon'></i>", text, {
      toastClass: 'toast success',
      positionClass: 'toast-bottom-right',
      enableHtml: true,
      timeOut: 3000
    },
    );
  }

  showError(text) {
    this._toastr.show("<i class='fas fa-fw fa-circle-xmark toast-icon'></i>", text, {
      toastClass: 'toast error',
      positionClass: 'toast-bottom-right',
      enableHtml: true,
      timeOut: 3000
    });
  }

  showDelete(text) {
    this._toastr.show("<i class='fas fa-fw fa-triangle-exclamation toast-icon'></i>", text, {
      toastClass: 'toast error',
      positionClass: 'toast-bottom-right',
      enableHtml: true,
      timeOut: 3000
    });
  }

  showInfo(text) {
    this._toastr.show("<i class='fas fa-fw fa-circle-info toast-icon'></i>", text, {
      toastClass: 'toast info',
      positionClass: 'toast-bottom-right',
      enableHtml: true,
      timeOut: 3000
    });
  }

  showNotification(text) {
    this._toastr.show("<i class='fas fa-fw fa-circle-info toast-icon'></i>", text, {
      toastClass: 'toast info',
      positionClass: 'toast-top-right',
      enableHtml: true,
      timeOut: 3000
    });
  }
}
