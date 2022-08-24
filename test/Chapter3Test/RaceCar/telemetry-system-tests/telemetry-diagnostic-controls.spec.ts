import { describe, expect, it } from 'vitest'
import TelemetryDiagnosticControls
	from '../../../../src/Chapter3/RaceCar/telemetry-system/telemetry-diagnostic-controls'

describe('Telemetry System', () => {

	describe('TelemetryDiagnosticControls', () => {
		const diagnosticController = new TelemetryDiagnosticControls()

		it('should read a correct diagnostic info', () => {
			diagnosticController.writeDiagnosticInfo('foo')
			expect(diagnosticController.readDiagnosticInfo()).to.eql('foo')
		})

		it('should transmission check success', () => {
			diagnosticController.checkTransmission()
			expect(diagnosticController.readDiagnosticInfo()).toEqual('LAST TX rate................ 100 MBPS\r\n'
				+ 'HIGHEST TX rate............. 100 MBPS\r\n'
				+ 'LAST RX rate................ 100 MBPS\r\n'
				+ 'HIGHEST RX rate............. 100 MBPS\r\n'
				+ 'BIT RATE.................... 100000000\r\n'
				+ 'WORD LEN.................... 16\r\n'
				+ 'WORD/FRAME.................. 511\r\n'
				+ 'BITS/FRAME.................. 8192\r\n'
				+ 'MODULATION TYPE............. PCM/FM\r\n'
				+ 'TX Digital Los.............. 0.75\r\n'
				+ 'RX Digital Los.............. 0.10\r\n'
				+ 'BEP Test.................... -5\r\n'
				+ 'Local Rtrn Count............ 00\r\n'
				+ 'Remote Rtrn Count........... 00')
		})
	})
})