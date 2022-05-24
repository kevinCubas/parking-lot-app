import { selectHtmlElement } from "../main";
import { addVehicle } from "./addVehicle";
import { parkingLocalStorage } from "./saveStorage";

export function renderVehicle() {
  selectHtmlElement("#parking-lot")!.innerHTML = "";
  const parking = parkingLocalStorage();

  if(parking.length) {
    parking.forEach((veiculo) => addVehicle(veiculo));
  }
}