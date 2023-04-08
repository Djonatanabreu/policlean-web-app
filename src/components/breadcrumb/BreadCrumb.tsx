import Link from 'next/link';

import classes from './breadCrumb.module.css';

export const BreadCrumb = () => {
  const breadcrumbItems = [
    { productId: '1', title: 'home' },
    { productId: '2', title: 'product' },
    { productId: '3', title: 'productId' },
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
