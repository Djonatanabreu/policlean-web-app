import Image from 'next/image';
import Link from 'next/link';
import classes from './thumbListSelector.module.css';
import { Controls } from './components/Controls';

export const ThumbListSelector = () => {
  const thumbImages = [
    { id: '1', text: '12helo', url: '/super_pos_obra_principal_5l.png' },
    { id: '2', text: '34helo', url: '/super_pos_obra_principal_5l.png' },
    { id: '3', text: '56helo', url: '/super_pos_obra_principal_5l.png' },
    { id: '4', text: '56helo', url: '/super_pos_obra_principal_5l.png' },
    { id: '5', text: '56helo', url: '/super_pos_obra_principal_5l.png' },
    { id: '6', text: '56helo', url: '/super_pos_obra_principal_5l.png' },
    { id: '7', text: '56helo', url: '/super_pos_obra_principal_5l.png' },
    { id: '8', text: '56helo', url: '/super_pos_obra_principal_5l.png' },
    { id: '9', text: '56helo', url: '/super_pos_obra_principal_5l.png' },
  ];
  return (
    <div className={classes.thumbListContainer}>
      <ul>
        {thumbImages.map((thumb) => {
          return (
            <li key={thumb.id}>
              <Link href={''}>
                <Image
                  src={thumb.url}
                  alt={thumb.text}
                  width={70}
                  height={70}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <Controls />
    </div>
  );
};
