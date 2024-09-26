import { createDeleteHandler } from '../../../../../lib/api2-handlers';

export const DELETE = createDeleteHandler(
  'music_club',
  '/api/music_club/questions/[id]'
);
