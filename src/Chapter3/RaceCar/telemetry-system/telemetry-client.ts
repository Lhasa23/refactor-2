import TelemetryServer from './telemetry-server'

export default class TelemetryClient {
	private readonly connectionString: string = '*111#'

	private telemetryServer: TelemetryServer

	constructor () {
		this.telemetryServer = new TelemetryServer()
		this.connect(this.connectionString)
	}

	public connect (telemetryServerConnectionString: string) {
		this.telemetryServer.disconnect()

		let retryLeft = 3
		while (!this.telemetryServer.getOnlineStatus() && retryLeft > 0) {
			this.telemetryServer.connect(telemetryServerConnectionString)
			retryLeft -= 1
		}

		if (!this.telemetryServer.getOnlineStatus()) {
			throw new Error('Unable to connect')
		}

		this.telemetryServer.send(this.telemetryServer.diagnosticMessage())
	}

	public receive () {
		return this.telemetryServer.receive()
	}
}
