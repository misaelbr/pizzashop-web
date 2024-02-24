import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: {
          name: 'Pizza calabresa',
        },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: {
          name: 'Pizza camarão',
        },
        quantity: 2,
      },
    ],
    totalInCents: 5000,
  })
})
