import type { NextApiRequest, NextApiResponse } from 'next';
import { CollectionType } from '../../utils';
import data from '../../utils/mock.json';

interface ICollections {
  [key: string]: Array<CollectionType>;
}

const collections: ICollections = data;

function readCategory(res: NextApiResponse<any>, category: string) {
  try {
    res.status(200).json({ data: { collections: collections[category] } });
  } catch (error) {
    res.status(200).json({ data: { collections: [] } });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { query } = req;

  const hasQuery = !!Object.entries(query).length;

  if (hasQuery && (typeof query.category === 'string')) {
    readCategory(res, query.category);
  }

  res.status(200).json({ data: { collections } });
}
