import { FetchUserCheckInsService } from '../fetch-user-check-ins-history'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeFetchUserCheckInsHistoryService() {
  const checkInRepository = new PrismaCheckInsRepository()
  const service = new FetchUserCheckInsService(checkInRepository)

  return service
}
