import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent {

  cart: Cart[] = []

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

   ngOnInit(): void {
    this.populateCart();
   }

  populateCart() {
    var cart = window.localStorage.getItem("cart") ?? '';
    var allEntries = JSON.parse(cart) ?? [];
    this.cart = allEntries;
  }

}
