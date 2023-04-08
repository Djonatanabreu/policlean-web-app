import Image from 'next/image';
import classes from './deliveryTable.module.css';

export const DeliveryTable = () => {
  return (
    <table className={classes.deliveryTableContainer}>
      <thead>
        <th className={classes.thFrete} colSpan={1}>
          Frete
        </th>
        <th>Valor</th>
        <th>Prazo</th>
      </thead>
      <tbody>
        <tr>
          <td>CORREIOS PAC</td>
          <td>R$ 40,27</td>
          <td>5 a 6 dias úteis.</td>
        </tr>
        <tr>
          <td>CORREIOS SEDEX</td>
          <td>R$ 67,54</td>
          <td>2 a 3 dias úteis.</td>
        </tr>
      </tbody>
    </table>
  );
};
