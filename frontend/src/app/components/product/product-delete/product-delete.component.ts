import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css',
})
export class ProductDeleteComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  product: Product = {
    name: '',
    price: 0,
  };
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? 0;
    if (id !== 0) {
      const idNumber = +id;
      if (!isNaN(idNumber)) {
        this.productService.readById(idNumber).subscribe((product) => {
          this.product = product;
        });
      }
    }
  }

  deleteProduct(): void {
    if (this.product.id) {
      this.productService.delete(this.product.id).subscribe(() => {
        this.productService.showMessage('Produto excluído com sucesso!');
        this.router.navigate(['products']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['products']);
  }
}
