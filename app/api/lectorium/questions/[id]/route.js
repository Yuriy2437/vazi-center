import { createDeleteHandler } from '../../../../../lib/api2-handlers';

export const DELETE = createDeleteHandler(
  'lectorium',
  '/api/lectorium/questions/[id]'
);
