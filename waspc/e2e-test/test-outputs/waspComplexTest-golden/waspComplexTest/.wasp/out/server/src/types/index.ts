
import { type Application } from 'express'
import { Server } from 'http'

export type ServerSetupFn = (context: ServerSetupFnContext) => Promise<void>

export type ServerSetupFnContext = {
  app: Application,
  server: Server,
}

export type { Application } from 'express'
export { Server } from 'http'

export type { GetUserFieldsFn } from '../auth/providers/oauth/types';

