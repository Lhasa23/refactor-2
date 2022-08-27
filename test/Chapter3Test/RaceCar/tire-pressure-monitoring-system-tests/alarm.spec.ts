import { describe, expect, it } from 'vitest'
import Alarm from '../../../../src/Chapter3/RaceCar/tire-pressure-monitoring-system/alarm'

describe('Tyre Pressure Monitoring System', () => {

	describe('Alarm', () => {

		it('should safe while pressure psi value within threshold', () => {
			const alarm = new Alarm()
			expect(alarm.judgeCurrentPSI(18)).toEqual(false)
		})

		it('should alarm while pressure psi value over threshold', () => {
			const alarm = new Alarm()
			expect(alarm.judgeCurrentPSI(16)).toEqual(true)
			expect(alarm.judgeCurrentPSI(22)).toEqual(true)
		})

	})

})