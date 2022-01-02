import type { NextApiRequest, NextApiResponse } from 'next';
import { allCollections, CollectionType } from '../../../utils';

export function readOne(res: NextApiResponse<any>, id: string) {
  try {
    const collection = allCollections.find((item: CollectionType) => {
      if (typeof item === 'object' && typeof item.node === 'object') {
        return item.node.id === id;
      }

      return false;
    });

    if (collection) {
      res.status(200).json({ data: { collection } });
    } else {
      res.status(404).json({ data: { collection } });
    }
  } catch (error) {
    res.status(200).json({ data: { collection: {} } });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { query } = req;

  return readOne(res, typeof query.id === 'string' ? query.id : '');
}
