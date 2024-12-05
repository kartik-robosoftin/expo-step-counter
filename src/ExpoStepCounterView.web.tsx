import * as React from 'react';

import { ExpoStepCounterViewProps } from './ExpoStepCounter.types';

export default function ExpoStepCounterView(props: ExpoStepCounterViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
