import type { NextApiRequest, NextApiResponse } from 'next';
import data from '../../utils/mock.json';

type CollectionsType = ReturnType<() => typeof data.top>;

interface ICollections {
  [key: string]: CollectionsType;
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
