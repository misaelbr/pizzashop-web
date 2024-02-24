import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custum-restaurant-id',
    managerId: 'custom-user-id',
    description: 'A melhor da pizza italiana',
    name: 'Pizzaria do John',
    createdAt: new Date(),
    updatedAt: null,
  })
})
