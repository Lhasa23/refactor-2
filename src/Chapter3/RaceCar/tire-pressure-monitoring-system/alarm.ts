import Sensor from './sensor'

// only responsible for checking tire pressure to alarm
export default class Alarm {
	readonly highPressureThreshold: number = 21
	readonly lowPressureThreshold: number = 17

	private sensor: Sensor
	private alarmOn: boolean

	constructor () {
		this.sensor = new Sensor()
		this.alarmOn = false
	}

	public check () {
		this.alarmOn = this.judgeCurrentPSI(this.sensor.popNextPressurePsiValue())
	}

	judgeCurrentPSI (psiPressureValue: number) {
		return psiPressureValue < this.lowPressureThreshold || this.highPressureThreshold < psiPressureValue
	}

	public isAlarmOn () {
		return this.alarmOn
	}

}
