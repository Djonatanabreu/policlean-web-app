import classes from './productDelivery.module.css';
import { DeliveryTable } from './components/DeliveryTable/DeliveryTable';
import { IProductDeliveryProps } from './types';

export const ProductDelivery = ({
  onSearchHandler,
  onTypeZipCode,
  zipCodeValue,
}: IProductDeliveryProps) => {
  return (
    <div className={classes.deliveryContainer}>
      <p>Frete e prazo de entrega</p>
      <div className={classes.deliveryInput}>
        <input
          onChange={onTypeZipCode}
          type='number'
          inputMode='numeric'
          placeholder='22020-020'
          value={zipCodeValue}
          pattern='/^([0-9]){5}([-])([0-9]){3}$/'
        />
        <button onClick={onSearchHandler}>CALCULAR</button>
      </div>
      <div>
        <DeliveryTable />
      </div>
    </div>
  );
};
