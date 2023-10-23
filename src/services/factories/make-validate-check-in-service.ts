import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckInsService } from '../validate-check-in'

export function makeValidateCheckInService() {
  const checkInRepository = new PrismaCheckInsRepository()
  const service = new ValidateCheckInsService(checkInRepository)

  return service
}
