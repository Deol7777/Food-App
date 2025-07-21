### 🔧 Firebase Setup

1. Create a `.env` file in the root directory.
2. Paste your Firebase config like this:

REACT_APP_FIREBASE_DB_URL="$YOUR_FIREBASE_DB_URL"

3. Run `npm install` and `npm start`

# 🍔 Food Order App

A modern, responsive food ordering application built with React. Order your favorite meals with just a few clicks and enjoy hassle-free delivery right to your doorstep!

## 🌟 Features

- **Browse Menu**: Explore a wide variety of delicious dishes
- **Shopping Cart**: Add/remove items with quantity management
- **Order Summary**: Review your order before checkout
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface with CSS modules
- **Real-time Updates**: Dynamic cart updates and total calculations

## 🚀 Live Demo

Visit the live application: [Food Order App](https://Deol7777.github.io/Food-App)

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **CSS Modules** - Component-scoped styling
- **React Context API** - State management for cart functionality
- **React Hooks** - useState, useContext for modern React patterns
- **Create React App** - Build toolchain and development setup

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Deol7777/Food-App.git
   cd Food-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app

## 📝 Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

## 🎯 How to Use

1. **Browse the Menu**: Scroll through available meals with descriptions and prices
2. **Add to Cart**: Click the "+" button to add items to your cart
3. **Manage Quantities**: Adjust item quantities in the cart modal
4. **Review Order**: Click the cart icon to view your order summary
5. **Checkout**: Proceed to checkout when ready to place your order

## 🔧 Key Components

- **CartProvider**: Manages global cart state using React Context
- **Header**: Navigation bar with cart button showing item count
- **AvailableMeals**: Displays the menu of available food items
- **Cart**: Modal displaying cart contents and checkout options
- **MealItem**: Individual meal component with add to cart functionality


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Gurnoor Deol** - [GitHub Profile](https://github.com/Deol7777)

## 🙏 Acknowledgments

- Built with Create React App
- Icons and styling inspired by modern food delivery apps
- Thanks to the React community for excellent documentation and resources
- Inspiration: Udemy Course - "React - The Complete Guide 2025 (incl. Next.js, Redux)"