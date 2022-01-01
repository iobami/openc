import Link from 'next/link';
import React from 'react';
import { useActiveTab } from '../hooks';
import { categories } from '../utils';

export default function CategoriesList() {
  const isActive = useActiveTab();

  return (
    <section className="categories-section">
      <ul className="categories-section__ul" title="categories list">
        {categories.map((category: string) => (
          <li className="categories-section__li " key={category}>
            <Link href={`/?tab=${category}`}>
              <a className={`categories-section__li__a ${isActive(category) ? 'categories-section__li__a--active' : ''}`} href={`/?tab=${category}`}>{category}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
