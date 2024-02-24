import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza', amount: 200 },
    { product: 'Burger', amount: 120 },
    { product: 'Soda', amount: 200 },
    { product: 'Beer', amount: 20 },
    { product: 'Fries', amount: 150 },
  ])
})
