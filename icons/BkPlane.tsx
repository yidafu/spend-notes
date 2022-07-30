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

let BkPlane: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 91.428571q25.142857 29.714286 6.857143 84.571429t-61.714286 98.285714l-92 92 91.428572 397.714286q2.857143 10.857143-6.857143 18.857143l-73.142857 54.857143q-4 3.428571-10.857143 3.428571-2.285714 0-4-0.571428-8.571429-1.714286-12-9.142858l-159.428572-290.285714-148 148 30.285715 110.857143q2.857143 9.714286-4.571429 17.714286l-54.857143 54.857143q-5.142857 5.142857-13.142857 5.142857h-1.142857q-8.571429-1.142857-13.714286-7.428572l-108-144-144-108q-6.285714-4-7.428571-13.142857-0.571429-7.428571 5.142857-14.285714l54.857143-55.428572q5.142857-5.142857 13.142857-5.142857 3.428571 0 4.571428 0.571429l110.857143 30.285714 148-148-290.285714-159.428571q-8-4.571429-9.714286-13.714286-1.142857-9.142857 5.142857-15.428571l73.142858-73.142858q8-7.428571 17.142857-4.571428l380 90.857143 91.428571-91.428572q43.428571-43.428571 98.285714-61.714285t84.571429 6.857142z"
        fill={getIconColor(color, 0, '#87a7d6')}
      />
    </Svg>
  );
};

BkPlane.defaultProps = {
  size: 18,
};

BkPlane = React.memo ? React.memo(BkPlane) : BkPlane;

export default BkPlane;
