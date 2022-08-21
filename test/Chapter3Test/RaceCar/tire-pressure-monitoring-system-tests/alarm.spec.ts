import { describe, expect, it } from 'vitest'
import Alarm from '../../../../src/Chapter3/RaceCar/tire-pressure-monitoring-system/alarm'

describe('Tyre Pressure Monitoring System', () => {

	describe('Alarm', () => {

		it('foo', () => {
			const alarm = new Alarm()
			expect(alarm.isAlarmOn()).eql(false)
		})

	})

})
