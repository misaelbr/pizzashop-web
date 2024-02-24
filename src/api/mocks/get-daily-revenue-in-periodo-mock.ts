import { http, HttpResponse } from 'msw'

import { GetRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 2000 },
    { date: '02/01/2024', receipt: 1200 },
    { date: '03/01/2024', receipt: 200 },
    { date: '04/01/2024', receipt: 20 },
    { date: '05/01/2024', receipt: 1500 },
    { date: '06/01/2024', receipt: 2800 },
    { date: '07/01/2024', receipt: 6000 },
  ])
})
