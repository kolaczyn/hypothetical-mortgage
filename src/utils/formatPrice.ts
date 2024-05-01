export const formatPrice = (price: number) =>
  Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(
    price,
  )
