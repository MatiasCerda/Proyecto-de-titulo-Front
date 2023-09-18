// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	// Local
	 server: 'http://localhost:8080/',

	// Desarrollo
	//server: 'http://4.0.14.91:8080/',
	server_security: 'http://4.0.14.90:8080/',

	// QA
	//server: 'http://4.0.13.90:8080/',
	// server_security: 'http://4.0.13.90:8080/',

	rest_api: 'monitorContabilizacionesRest/',
	rest_security: 'securityRest/'
}