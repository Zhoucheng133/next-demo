import { Elysia } from 'elysia'

const app = new Elysia({ prefix: '/api' })
.get('/', () => 'api/')
.get('/test', ()=> 'api/test')

export const GET = app.handle;
export const POST = app.handle;