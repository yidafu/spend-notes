/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let BkEat: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M281.6 160c6.4 0 12.8 6.4 12.8 12.8v176c0 12.8 12.8 25.6 35.2 22.4 12.8 3.2 25.6-9.6 22.4-22.4V182.4c0-12.8 12.8-22.4 25.6-22.4h22.4c12.8 0 22.4 9.6 22.4 22.4v163.2c-3.2 12.8 9.6 25.6 22.4 22.4 22.4 3.2 35.2-9.6 35.2-22.4V172.8c0-6.4 6.4-12.8 12.8-12.8h12.8c6.4 0 12.8 3.2 12.8 9.6v6.4l12.8 48 3.2 22.4 6.4 32 3.2 12.8 3.2 22.4 3.2 12.8V358.4c0 86.4-54.4 118.4-128 128l19.2 320c3.2 32-22.4 57.6-54.4 57.6s-57.6-25.6-54.4-57.6l19.2-320c-73.6-6.4-128-41.6-128-128v-25.6l3.2-12.8 3.2-12.8 3.2-16 6.4-38.4 9.6-41.6 6.4-38.4c3.2-9.6 9.6-12.8 16-12.8h9.6z m419.2 19.2l3.2 3.2 12.8 12.8c32 32 60.8 89.6 70.4 131.2v16c3.2 19.2 6.4 48 6.4 73.6l3.2 25.6v115.2c0 32-22.4 64-54.4 70.4h-3.2v176c-3.2 25.6-22.4 48-48 48s-44.8-19.2-48-41.6V195.2c3.2-35.2 25.6-48 57.6-16z"
        fill={getIconColor(color, 0, '#1296db')}
      />
    </Svg>
  );
};

BkEat.defaultProps = {
  size: 18,
};

BkEat = React.memo ? React.memo(BkEat) : BkEat;

export default BkEat;
