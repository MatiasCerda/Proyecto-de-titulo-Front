import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Injectable({
	providedIn: 'root'
})
export class ReportService {

	private url = environment.server + environment.rest_api + "private/reportes";
	constructor(private http: HttpClient) { }

	getReporte(name: string, type: string, params: HttpParams) {
		//Con seguridad
		return this.http.get(`${this.url}/${name}/${type}?${params.toString()}`, { responseType: 'arraybuffer', observe: 'response' })
			.subscribe(
				(res: HttpResponse<any>) => {
					if (res.body != null) {
						name = name + "." + type;
						let blob = new Blob([res.body], { type: res.headers.get("Content-Type") });
						saveAs(blob, name);
					}
				}
			);

	}
}
