export function formatoRutGuionSinCeros(value: string): string {
	value = value.trim();
	value = value.replace("-", "");
	value = value.replace(".", "");
	value = value.replace(".", "");

	let cuerpo = (value.slice(0, -1)).trim();
	let dv = (value.slice(-1).toUpperCase()).trim();
	for (var _i = 0; _i < 2; _i++) {
		var num = (cuerpo.substring(0, 1)).trim();
		if (num == "0" && cuerpo.length >= 8) {
			cuerpo = (cuerpo.slice(1)).trim();
		}
	}
	let rut = cuerpo + "-" + dv;

	return rut;
}