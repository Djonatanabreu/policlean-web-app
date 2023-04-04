import Link from 'next/link';

import classes from './breadCrumb.module.css';
import { Fragment } from 'react';

export const BreadCrumb = () => {
  const breadcrumbItems = [
    { productId: '', title: 'home' },
    { productId: '', title: 'product' },
    { productId: 'product', title: 'productId' },
  ];
  return (
    <div className={classes.breadcrumb}>
      <ul>
        {breadcrumbItems.map((item, index) => {
          return (
            <div
              className={
                classes[
                  `${
                    index === breadcrumbItems.length + 1
                      ? 'breadcrumb-last-item'
                      : 'breadcrumb-item'
                  }`
                ]
              }
              key={item.productId}
            >
              {index === 0 ? null : <hr />}
              <li>
                <Link href={`${item.productId}`}>{item.title}</Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
