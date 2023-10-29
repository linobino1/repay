import type { CollectionConfig } from 'payload/types';
import path from 'path';

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: path.resolve(__dirname, '../../media'),
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
  },
  fields: [
  ],
};

export default Media;