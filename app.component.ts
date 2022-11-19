import { Component, OnInit } from '@angular/core';
import { MockService } from './mock.service';

interface Foo {
  [key: string]: any;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  public foo:Foo={};
  constructor(private _students:MockService){ }
  title = 'mockservice';
  public  names:string[] = [];
  public duplicatename:string[] =[];
  public count:string[] =[];
  public num:number[] =[0];
  public bg:string[]=[];
  public id:number=0;
  ngOnInit(){
    this.names = this._students.getData();

    for (var i=0;i<this.names.length;i++)
    {
      this.duplicatename[i]=this.names[i];
      
    }

    for ( var j=0;j<this.duplicatename.length;j++)
    {
      var counter:number=0;
      for(var a=0;a<this.count.length;a++)
      {
        if(this.duplicatename[j]==this.count[a])
        {
          counter++;
          break;
        }
      }
      if(counter==0){
        this.count[this.id]=this.duplicatename[a];
        this.id=this.id+1;
      }

    }
    console.log(this.count);

    for(var b=0;b<this.count.length;b++)
    {
      let xy:number=0;
      for (var ab of this.duplicatename)
      {
        if(this.count[b] == ab)
        {
          xy=xy+1;
        }
      }
      this.num[b]=xy;
    }


    for(var z=0;z<this.count.length;z++)
    {
      this.foo[this.count[z]]=this.num[z];
    }
    
    for(let n=0;n<this.num.length;n++)
    {
      if(this.num[n]>0 && this.num[n]<3)
      {
        this.bg[n]="red";
      }else if(this.num[n]>2 && this.num[n]<10)
      {
        this.bg[n]="yellow";
      }else{
        this.bg[n]="green";
      }
    }
  }

  
}
