export class Opciones {
	public id: string;
	public codigo: string;
	public nombre: string;
	public glosa: string;
	public url: string;
	public visible: string;
	public empleado: string;
	public sistema: string;
	public idOpcionPadre: string;
	public perfil: string;
	public tipo: string;
	public accesible: boolean;
	public subOpciones: Array<Opciones>;

}
