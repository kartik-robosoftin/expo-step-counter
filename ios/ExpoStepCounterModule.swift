import ExpoModulesCore
import CoreMotion

public class ExpoStepCounterModule: Module {
  let kOnStepCounted = "onStepCounted"
    
  public func definition() -> ModuleDefinition {
    let pedometer = CMPedometer() 
    Name("ExpoStepCounter")
      
    Events(kOnStepCounted)
    
    Function("requestPermissions") {
        pedometer.stopEventUpdates()
    }
      
    Function("startSendingData") {
        pedometer.startUpdates(from: Date()) { pedometerData, error in
            guard let pedometerData = pedometerData, error == nil else {return}
            self.sendEvent(self.kOnStepCounted, [
              "step": pedometerData.numberOfSteps.intValue
            ])
        }
    }

    Function("stopSendingData") {
        pedometer.stopEventUpdates()
    }
  }
}

