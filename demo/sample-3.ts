// @flow

import Connection from './Connection';
import XmlStyle from './XmlStyle';

enum aspectTypes {
  'VARIABLE',
  'FIXED',
};

type Test = {
  test: string,
  connection: Connection,
};

const bla: Test;

interface XmlConfig {
  background: boolean;
  calculateBorder: boolean;
  stencilBoundsX: number;
  stencilBoundsY: number;
  stencilBoundsMinX: number;
  stencilBoundsMinY: number;
  aspectType: AspectType;
  strokeWidth: string;
  relativeScaling: boolean;
  relativeScalingRatio: number;
  absoluteScalingX: number;
  absoluteScalingY: number;
  roundCoords: boolean;
  decimalsToRound: number;
  connection: ?Connection;
  xmlStyle: ?XmlStyle;
}

const xmlDefaultConfig: XmlConfig = {
  background: false,
  calculateBorder: false,
  stencilBoundsX: 0,
  stencilBoundsY: 0,
  stencilBoundsMinX: 0,
  stencilBoundsMinY: 0,
  aspectType: aspectTypes.VARIABLE,
  strokeWidth: 'inherit',
  relativeScaling: true,
  relativeScalingRatio: 1.0,
  absoluteScalingX: 100,
  absoluteScalingY: 100,
  roundCoords: true,
  decimalsToRound: 2,
  connection: undefined,
  xmlStyle: undefined,
};

export default xmlDefaultConfig;
