import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { ProductService } from '../../../shared/services/product.service';
import { ProductCardComponent } from '../../../shared/components/ui/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { delay, Subject, takeUntil } from 'rxjs';
import { LoadingSpinnerComponent } from '../../../shared/components/ui/loading-spinner/loading-spinner.component';
@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, FormsModule, LoadingSpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  searchValue!: string;
  showSortDropdown: boolean = false;
  products!: Product[];
  filteredProducts: Product[] = [];
  currentSortOption: string = '';
  isLoading: boolean = false;
  private readonly destroy$ = new Subject<void>();
  private readonly _productService: ProductService = inject(ProductService);

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this._productService
      .getProduct()
      .pipe(delay(800), takeUntil(this.destroy$))
      .subscribe({
        next: (res: Product[]) => {
          console.log(res);
          this.products = res;
          this.filteredProducts = [...res];
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
        },
        complete: () => {
          console.log('complete!');
          this.isLoading = false;
        },
      });
  }

  search() {
    if (!this.searchValue) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter((product) =>
        product.title.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    }
    // Reapply sorting after search
    if (this.currentSortOption) {
      this.sortProducts(this.currentSortOption, false);
    }
  }

  toggleSortDropdown() {
    this.showSortDropdown = !this.showSortDropdown;
  }

  sortProducts(sortOption: string, updateCurrentSort: boolean = true) {
    if (updateCurrentSort) {
      this.currentSortOption = sortOption;
    }

    switch (sortOption) {
      case 'price_asc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name_asc':
        this.filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name_desc':
        this.filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        // Default to original order
        this.filteredProducts = [...this.products];
        break;
    }

    if (updateCurrentSort) {
      this.showSortDropdown = false;
    }
  }

  resetFilters() {
    this.searchValue = '';
    this.currentSortOption = '';
    this.filteredProducts = [...this.products];
    this.showSortDropdown = false;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
