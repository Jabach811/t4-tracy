export const featuredDrinkIcons = [
  {
    id: 'brown-sugar-latte',
    name: 'Brown Sugar Latte',
    price: 5.90,
    asset: 'assets/products/boba/brown-sugar-latte.png',
    alt: 'Brown sugar boba latte with tapioca pearls'
  },
  {
    id: 'matcha-fresh-milk',
    name: 'Matcha Fresh Milk',
    price: 5.70,
    asset: 'assets/products/boba/matcha-fresh-milk.png',
    alt: 'Layered matcha fresh milk with a matcha swirl'
  },
  {
    id: 'winter-melon',
    name: 'Winter Melon',
    price: 5.20,
    asset: 'assets/products/boba/winter-melon.png',
    alt: 'Golden winter melon tea over ice'
  },
  {
    id: 'elegant-rose-aloe',
    name: 'Elegant Rose Aloe',
    price: 5.20,
    asset: 'assets/products/boba/elegant-rose-aloe.png',
    alt: 'Pink rose tea with aloe cubes'
  },
  {
    id: 'honey-green-tea',
    name: 'Honey Green Tea',
    price: 4.99,
    asset: 'assets/products/boba/honey-green-tea.png',
    alt: 'Honey green tea over ice'
  },
  {
    id: 'avocado-milkshake',
    name: 'Avocado Milkshake',
    price: 6.25,
    asset: 'assets/products/boba/avocado-milkshake.png',
    alt: 'Creamy avocado milkshake with avocado slices'
  }
];

if (typeof window !== 'undefined') {
  window.T4_DRINK_ICONS = featuredDrinkIcons;
}
