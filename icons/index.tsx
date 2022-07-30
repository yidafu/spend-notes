/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import BkShop from './BkShop';
import BkMedicine from './BkMedicine';
import BkShopping from './BkShopping';
import BkHotel from './BkHotel';
import BkPlane from './BkPlane';
import BkCart from './BkCart';
import BkEat from './BkEat';
import BkList from './BkList';
import BkChart from './BkChart';
import BkPlus from './BkPlus';
import BkListLite from './BkListLite';
import BkChartLite from './BkChartLite';
export { default as BkShop } from './BkShop';
export { default as BkMedicine } from './BkMedicine';
export { default as BkShopping } from './BkShopping';
export { default as BkHotel } from './BkHotel';
export { default as BkPlane } from './BkPlane';
export { default as BkCart } from './BkCart';
export { default as BkEat } from './BkEat';
export { default as BkList } from './BkList';
export { default as BkChart } from './BkChart';
export { default as BkPlus } from './BkPlus';
export { default as BkListLite } from './BkListLite';
export { default as BkChartLite } from './BkChartLite';

export type IconNames = 'shop' | 'medicine' | 'shopping' | 'hotel' | 'plane' | 'cart' | 'eat' | 'list' | 'chart' | 'plus' | 'list-lite' | 'chart-lite';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'shop':
      return <BkShop key="1" {...rest} />;
    case 'medicine':
      return <BkMedicine key="2" {...rest} />;
    case 'shopping':
      return <BkShopping key="3" {...rest} />;
    case 'hotel':
      return <BkHotel key="4" {...rest} />;
    case 'plane':
      return <BkPlane key="5" {...rest} />;
    case 'cart':
      return <BkCart key="6" {...rest} />;
    case 'eat':
      return <BkEat key="7" {...rest} />;
    case 'list':
      return <BkList key="8" {...rest} />;
    case 'chart':
      return <BkChart key="9" {...rest} />;
    case 'plus':
      return <BkPlus key="10" {...rest} />;
    case 'list-lite':
      return <BkListLite key="11" {...rest} />;
    case 'chart-lite':
      return <BkChartLite key="12" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
