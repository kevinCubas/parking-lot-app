import { addVehicle } from "./functions/addVehicle";
import { renderVehicle } from "./functions/renderVehicle";
import { parkingLocalStorage } from "./functions/saveStorage";

export const selectHtmlElement = (element: string): HTMLInputElement | null => document.querySelector(element);

(function() {

  renderVehicle()
  selectHtmlElement("#register")?.addEventListener("click", () => {
    const name = selectHtmlElement("#carname")?.value;
    const licensePlate = selectHtmlElement("#license-plate")?.value;

    if(!name || !licensePlate) {
      alert(`the "name" and "license plate" fields are required!`)
      return;
    }
    
    parkingLocalStorage()
    addVehicle({name, licensePlate, checkIn: new Date().toISOString()}, true)
  })
}())