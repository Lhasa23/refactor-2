import TelemetryClient from './telemetry-client'

export default class TelemetryDiagnosticControls {
	private telemetryClient: TelemetryClient
	private diagnosticInfo: string

	constructor () {
		this.telemetryClient = new TelemetryClient()
		this.diagnosticInfo = ''
	}

	public readDiagnosticInfo () {
		return this.diagnosticInfo
	}

	public writeDiagnosticInfo (newValue: string) {
		this.diagnosticInfo = newValue
	}

	public checkTransmission () {
		this.writeDiagnosticInfo(this.telemetryClient.receive())
	}
}
