import { Component, OnInit } from "@angular/core";

@Component(
    {
        selector: 'app-ngfor',
        templateUrl: 'ngfor.component.html',
        styleUrls: ['ngfor.component.scss']
    }
)
export class ngforcomponent implements OnInit {
    show :boolean=true;

    public employee: any=[
       { id:1, name:'suraj'},
       { id:2, name:'ram'},
       {id:3, name:'st'},
    ]
    

     


    users: any;
    constructor() { }
    ngOnInit() {

    }

    uname: string = "";
    myName: string = ''

    user = [];

    onCreateUser(val: any) {
        this.myName = val
       
        
       
    };

    
}
  

