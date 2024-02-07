import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  imagePaths:string[] = [
    'assets/img/port/poert1.png',
    'assets/img/port/poert2.png',
    'assets/img/port/poert3.png',
    'assets/img/port/poert1.png',
    'assets/img/port/poert2.png',
    'assets/img/port/poert3.png'
  ];
  selectedImag:string = '';
  showImagePath(imagePath:string){
    this.selectedImag = imagePath
    console.log(this.selectedImag);
    
  }
   try:any = document.getElementById('detels')
   showDetels:boolean = false
  toggleImageVisibility(){
   this.showDetels = !this.showDetels
  }

  // selectedImageIndex: number | null = null;

  // handleImageClick(index: number): void {
  //   this.selectedImageIndex = index;
  //   document.body.classList.add('selected-image');
  // }

  // closeSelectedImage(): void {
  //   this.selectedImageIndex = null;
  //   document.body.classList.remove('selected-image');
  // }

}
