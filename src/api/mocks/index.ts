import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order-mock.ts'
import { cancelOrderMock } from './cancel-order-mock.ts'
import { deliverOrderMock } from './deliver-order-mock.ts'
import { dispatchOrderMock } from './dispatch-order-mock.ts'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-periodo-mock.ts'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock.ts'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock.ts'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock.ts'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock.ts'
import { getMonthRevenueMock } from './get-month-revenue-mock.ts'
import { getOrderDetailMock } from './get-order-details-mock.ts'
import { getOrdersMock } from './get-orders-mock.ts'
import { getPopularProductsMock } from './get-popular-products-mock.ts'
import { getProfileMock } from './get-profile-mock.ts'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock.ts'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailMock,
  approveOrderMock,
  cancelOrderMock,
  dispatchOrderMock,
  deliverOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
