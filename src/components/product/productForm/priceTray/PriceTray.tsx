import { Counter } from '@/components/Counter/Counter';
import classes from './counter.module.css';
import { Button } from '@/components/Button/Button';
import { useState } from 'react';

export const PriceTray = () => {
  const [value, setValue] = useState<number>(1);
  return (
    <div className={classes.trayContainer}>
      <div className={classes.trayTitleBox}>
        <h1>{'R$75,00'}</h1>
        <p>Em até 12x de R$7,19</p>
      </div>
      <div className={classes.trayBuyButton}>
        <Counter
          amountValue={value}
          onAddHandler={() => setValue(value + 1)}
          onSubHandler={() => setValue(value + -1)}
        />
        <div className={classes.btnBox}>
          <Button
            onClick={() => console.log('clicked')}
            onLoad={() => {
              ('');
            }}
          >
            COMPRAR
          </Button>
          <p>Aqui sua compra é 100% segura, compre com tranquilidade.</p>
        </div>
      </div>
      <Button
        onClick={() => console.log('clicked')}
        onLoad={() => {
          ('');
        }}
        largeButton={true}
      >
        REVENDA E LUCRE
      </Button>
    </div>
  );
};
