import { registerWebModule, NativeModule } from 'expo';

import { ExpoStepCounterModuleEvents } from './ExpoStepCounter.types';

class ExpoStepCounterModule extends NativeModule<ExpoStepCounterModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoStepCounterModule);
