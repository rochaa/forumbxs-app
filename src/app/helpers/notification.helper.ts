import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class NotificationHelper {
    constructor(
        private toastr: ToastrService) { }

    showErrors(result: any) {
        if (result.error && result.error.data) {
            result.error.data.forEach((notification: string) => {
                this.toastr.error(notification);
            });
        }
        else {
            this.toastr.error(result.error.message);
        }
    }

    showSuccess(message: string) {
        this.toastr.success(message);
    }
}