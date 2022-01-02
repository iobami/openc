import { NextApiRequest } from 'next';
import React from 'react';

export default function AssetDetails() {
  return (
    <section className="asset-section">
      hiii
    </section>
  );
}

export async function getServerSideProps({ query }: NextApiRequest) {
  let item = {};

  try {
    if (Array.isArray(query.slugs)) {
      const [, id] = query.slugs;

      item = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${id}`)
        .then((response) => response.json());
    }
  } catch (error) {
    item = {};
  }

  return {
    props: {
      item,
      query,
    },
  };
}
