import type { CartItem } from "~/models/cart-item.model"

export const useViewCart = () => useState<boolean>('viewCart', () => false)
export const useCart = () => useState<CartItem[]>('cart', () => [])