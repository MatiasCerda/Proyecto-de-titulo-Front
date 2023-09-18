import { Opciones } from "./Opciones";

export class Session {
	public nombreCompleto: string;
	public token: string;
	public username: string;
	public opciones: Opciones[];

	public activo: string;
	public app: string;
	public email: string;

	public idSucursal: number;
	public usuSybase: string;
	public nomSucursal: string;

}