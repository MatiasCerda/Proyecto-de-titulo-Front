export class errorDescripcion {
	nombre: string;
	codigo: number;
	mensaje: string;
	redirectTo: string;
}
export const erroresPosibles: errorDescripcion[] = [
	{
		nombre: "unauthorized",
		codigo: 401,
		mensaje: "No autorizado",
		redirectTo: "/login"
	},
	{
		nombre: "notfound",
		codigo: 404,
		mensaje: "Página no encontrada",
		redirectTo: "/home"
	}
];