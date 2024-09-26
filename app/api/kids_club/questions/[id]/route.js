import { createDeleteHandler } from '../../../../../lib/api2-handlers';

export const DELETE = createDeleteHandler(
  'kids_club',
  '/api/kids_club/questions/[id]'
);
