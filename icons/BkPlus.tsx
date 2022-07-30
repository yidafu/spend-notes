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

let BkPlus: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M448 448H192v128h256v256h128V576h256V448H576V192H448v256z m64 576A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z"
        fill={getIconColor(color, 0, '#7cb305')}
      />
    </Svg>
  );
};

BkPlus.defaultProps = {
  size: 18,
};

BkPlus = React.memo ? React.memo(BkPlus) : BkPlus;

export default BkPlus;
