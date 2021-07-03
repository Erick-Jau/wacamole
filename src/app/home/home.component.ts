import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ImgForm = false;
  public ImgFormm = false;
  public ImgFormmm = false;


  constructor() { }

  ngOnInit(): void {
  }

  togImg(){
    this.ImgForm = !this.ImgForm;
    this.ImgFormm = !this.ImgFormm;
    this.ImgFormmm = !this.ImgFormmm;
  }
  togImg0(){
    this.ImgForm = !this.ImgForm;
  }
  togImg1(){
    this.ImgFormm = !this.ImgFormm;
  }
  togImg2(){
    this.ImgFormmm = !this.ImgFormmm;
  }

}
