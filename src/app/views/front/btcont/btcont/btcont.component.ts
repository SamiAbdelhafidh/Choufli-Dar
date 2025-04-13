import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-btcont',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './btcont.component.html',
  styleUrls: ['./btcont.component.css']
})
export class BtcontComponent {
  showModal = false;

  phone = '';
  facebook = '';
  instagram = '';
  submitted = false;

  openModal() {
    this.showModal = true;
    this.submitted = false;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    this.submitted = true;
    //this.closeModall(); // إذا تحب تخلي البيانات تبان قبل ما تسكر، انحي هذي
  }
  closeModall() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.classList.add('fade-out');
      setTimeout(() => {
        this.showModal = false;
        modal.classList.remove('fade-out');
      }, 300); // مدة fadeOut
    } else {
      this.showModal = false;
    }
  }
  
}
