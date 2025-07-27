import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { ProductService } from '../../../shared/services/product.service';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { delay, Subject, takeUntil } from 'rxjs';
import { LoadingSpinnerComponent } from '../../../shared/components/ui/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, LoadingSpinnerComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: Product | null = null;
  apiError: boolean = false;
  isLoading: boolean = false;
  private readonly destroy$ = new Subject<void>();
  private readonly _productService: ProductService = inject(ProductService);
  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.getId();
  }

  // getId() {
  //   this._activatedRoute.paramMap.subscribe({
  //     next: (res: any) => {
  //       console.log(res?.params?.id);
  //       this.getProductDetails(res?.params?.id);
  //     },
  //   });
  // }
  getId() {
    this._activatedRoute.paramMap.subscribe({
      next: (params: ParamMap) => {
        const productId = params.get('id');
        if (productId) {
          console.log(productId);
          this.getProductDetails(+productId);
        } else {
          console.error('No product ID found in route');
        }
      },
      error: (err) => {
        console.error('Error getting route params:', err);
      },
    });
  }
  getProductDetails(id: number) {
    this.apiError = false;
    this.isLoading = true;
    this._productService
      .getSpecificProduct(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: Product) => {
          if (!res) {
            this.apiError = true;
            this.isLoading = false;
            return;
          }

          this.product = res;
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.apiError = true;
          this.isLoading = false;
          this.product = null;
        },
      });
  }
  getStarClass(starNumber: number, averageRating: number): string {
    const fullStars = Math.floor(averageRating);
    const hasFraction = averageRating % 1 !== 0;
    if (starNumber <= fullStars) {
      return 'fa-solid fa-star filled ';
    }
    if (hasFraction && starNumber === fullStars + 1) {
      return 'fa-solid fa-star-half-alt half-filled';
    }
    return 'fa-regular fa-star';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
