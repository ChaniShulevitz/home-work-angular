import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-items',
  imports: [],
  templateUrl: './items.html',
  styleUrl: './items.css',
  standalone: true,
})
export class Items implements OnInit{

  constructor(private route: ActivatedRoute) { };
  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id:', id);
  }
}
