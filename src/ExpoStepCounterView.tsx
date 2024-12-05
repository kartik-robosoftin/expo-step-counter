import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoStepCounterViewProps } from './ExpoStepCounter.types';

const NativeView: React.ComponentType<ExpoStepCounterViewProps> =
  requireNativeView('ExpoStepCounter');

export default function ExpoStepCounterView(props: ExpoStepCounterViewProps) {
  return <NativeView {...props} />;
}
