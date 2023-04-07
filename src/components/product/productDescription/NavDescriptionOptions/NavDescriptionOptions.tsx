import { NavButton } from '@/components/NavButton/NavButton';
import classes from './navDescriptionOptions.module.css';
import { useEffect, useState } from 'react';

export const NavDescriptionOptions = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(scrollY);
    };
    addEventListener('scroll', handleScroll);
    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scrollValue);

  return (
    <div
      className={
        scrollValue >= 1070
          ? classes.showNavOptionsContainer
          : classes.hiddenNavOptionsContainer
      }
    >
      <NavButton>O que é ?</NavButton>
      <NavButton>Benefícios do Super Pós Obra ?</NavButton>
      <NavButton>Como usar ? </NavButton>
      <NavButton>Descrição</NavButton>
      <NavButton>Quem é a Policlean Oirad ?</NavButton>
    </div>
  );
};
