import { EventSubscription } from "expo-modules-core";

import ExpoStepCounterModule from "./ExpoStepCounterModule";

export type StepChangeEvent = {
  step: number;
};

export function requestPermissions() {
  return ExpoStepCounterModule.requestPermissions();
}

export function startSendingData() {
  return ExpoStepCounterModule.startSendingData();
}

export function stopSendingData() {
  return ExpoStepCounterModule.stopSendingData();
}

export function addStepChangedListener(
  listener: (event: StepChangeEvent) => void
): EventSubscription {
  return ExpoStepCounterModule.addListener("onStepCounted", listener);
}
