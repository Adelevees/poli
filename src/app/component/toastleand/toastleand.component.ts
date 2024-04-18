import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastleand',
  standalone: true,
  imports: [],
  templateUrl: './toastleand.component.html',
  styleUrl: './toastleand.component.css',
})
export class ToastleandComponent {
  constructor(private toastr: ToastrService) {}
  showsuccess() {
    this.toastr.success('salvat cu succes', '', {
      closeButton: true,
      positionClass: 'toast-center-center',
    });
  }
}
