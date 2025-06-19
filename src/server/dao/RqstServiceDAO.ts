import type { RqstServiceEntity } from "../../entity/RqstServiceEntity";
import type { IRqsrServiceDAO } from "../iDao/IRqstServiceDAO";

export class RqstServiceDAO implements IRqsrServiceDAO {
  private API = "";
  private prefijo = "rqstService";

  private headers = {
    accept: "application/json",
    "Content-Type": "application/json",
  };
  constructor(urlServer: string) {
    this.API = `http://${urlServer}`;
  }
  async save(entity: RqstServiceEntity): Promise<boolean | null> {
    try {
      const response = await fetch(`${this.API}/api/${this.prefijo}`, {
        method: "PUT",
        headers: this.headers,
        body: JSON.stringify(entity),
      });
      if (response.status == 201) {
        const data = await response.json();
        return true;
      } else if (response.status == 404) {
        alert("No se ha podido conectar con el servidor ");
        return null;
      } else if (response.status == 400) {
        alert(response.statusText);
        return null;
      } else if (response.status == 422) {
        alert("Estas enviando un dato errado ");
        return null;
      }
      if (response.status == 401) {
        localStorage.clear();
        window.location.href = "/";
        return null;
      } else {
        throw new Error("Error en la solicitud");
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
