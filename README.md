# EZShop - Product Gallery

**EZShop** is a responsive Angular application that fetches and displays products from the **Fake Store API**. It features a clean modern design with dark mode support, dynamic routing, and comprehensive product management features.

---

## Features

- **Product Gallery**: Fetch and display products with details including:

  - Product name and image
  - Price and category
  - Rating display (⭐️ 4.5/5)

- **Advanced Product Filtering**:

  - Search bar with case-insensitive name filtering
  - Multi-criteria sorting:
    - Price (Low to High / High to Low)
    - Name (A-Z / Z-A)
  - Reset filters functionality

- **Product Details Page**:

  - Dynamic routing (`/products/:id`)
  - Complete product information:
    - Full description
    - High-resolution image
    - Price and category
    - Customer ratings

- **Enhanced UX**:
  - Dark/light mode toggle
  - Responsive design (mobile-first)
  - Loading indicators
  - Empty state handling
  - 404 error page

---

## 🎥 Demo Video

---

## Tech Stack

- **Frontend**: Angular 16+
- **Styling**: Tailwind CSS
- **State Management**: RxJS
- **API**: [Fake Store API](https://fakestoreapi.com)

---

## Live Demo

Check out the live demo of **EZShop** here:  
[Live Demo Link](https://ez-shop-1ebb.vercel.app/) <!-- Add your live demo link here -->

---

## Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- Node.js (v16 or higher)
- Angular CLI (v16 or higher)
- Git (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maomenraafat/Ez-Shop.git
   cd Ez-Shop
   ```

# Shop-Eazy

## Installation

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
ng serve
```

### 3. Open the app in your browser

Navigate to `http://localhost:4200` to view the application.

---

## Project Structure

```
products-gallery/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── interceptors/        # HTTP interceptors (loading & error handling)
│   │   │   │   ├── error/
│   │   │   │   │   ├── error.interceptor.spec.ts
│   │   │   │   │   ├── error.interceptor.ts
│   │   │   │   ├── loading.interceptor.spec.ts
│   │   │   │   ├── loading.interceptor.ts
│   │   ├── layout/
│   │   │   ├── footer/
│   │   │   ├── navbar/
│   │   │   ├── notfound/
│   │   ├── features/
│   │   │   ├── pages/
│   │   │   │   ├── home/
│   │   │   │   ├── interfaces/
│   │   │   │   ├── product-details/
│   │   ├── shared/
│   │   │   ├── components/          # Reusable UI components
│   │   │   ├── interfaces/
│   │   │   │   ├── product.ts
│   │   ├── services/                 # API and data handling services
│   │   │   ├── flowbite/
│   │   │   ├── product/    # Main module
│   │   ├── assets/                 # Static assets (e.g., images)
│   │    ├── styles.css              # Global styles
│   │    ├── angular.json            # Angular configuration
│   │    ├── package.json            # Project dependencies
│   │    ├── README.md               # Project documentation
```

EZShop/
├── src/
| ├── app/
| │ ├── layout/
| │ │ ├── footer/ # Footer component
| │ │ ├── navbar/ # Navigation bar with dark mode toggle
| │ │ ├── notfound/ # 404 page component
| │ ├── features/
| │ │ ├── home/ # Home page components
| │ │ ├── product-details/ # Product details page
| │ ├── shared/
| │ │ ├── components/ # Reusable UI components
| │ │ │ ├── business/ # Business logic components
| │ │ │ ├── ui/ # Presentational components
| │ │ │ │ ├── loading-spinner/
| │ │ │ │ ├── product-card/
| │ │ │ │ ├── theme-toggle/
| │ │ ├── interfaces/ # TypeScript interfaces
| │ │ ├── services/ # Application services
| │ │ │ ├── product.service.ts
| │ │ │ ├── theme.service.ts
| │ ├── enums/ # Application enums
| │ ├── environments/ # Environment configurations
| ├── assets/ # Static assets

---

## Future Enhancements

### Planned Features

- [ ] **Shopping Cart System**

  - Add-to-cart functionality
  - Cart persistence using local storage
  - Checkout page mockup

- [ ] **User Authentication**

  - Login/register flows
  - Protected routes
  - User profile management

- [ ] **Enhanced Product Discovery**
  - Category-based filtering
  - Price range slider
  - "Similar products" recommendations

### UI/UX Improvements

- [ ] **Product Reviews**

  - Star rating display
  - User review submission
  - Review sorting options

- [ ] **Wishlist Feature**
  - Heart icon on product cards
  - Dedicated wishlist page
  - Shareable wishlists

### Technical Upgrades

- [ ] **State Management**

  - NgRx implementation
  - Optimized API caching
  - Offline mode support

- [ ] **Performance**
  - Image lazy loading
  - Route preloading
  - PWA capabilities

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch:
   ```bash
   git checkout -b feature/maomenraafat
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/maomenraafat
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data.
- Angular and Tailwind CSS for making this project possible.
