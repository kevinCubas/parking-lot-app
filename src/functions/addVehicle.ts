import { selectHtmlElement } from "../main";
// import { calcTime } from "./calcTime";
// import { renderVehicle } from "./renderVehicle";
import { remove } from "./remove";
import { parkingLocalStorage, saveStorage } from "./saveStorage";

export interface IVehicle {
  name: string;
  licensePlate: string;
  checkIn: Date | string;
}

export function addVehicle(vehicle: IVehicle, save?: boolean) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>${vehicle.name}</td>
  <td>${vehicle.licensePlate}</td>
  <td>${vehicle.checkIn}</td>
  <td>
    <button class="delete remove-button-style">Remove</button>
  </td>
  `
  newRow.querySelector(".delete")?.addEventListener("click", function() {
    remove(vehicle.licensePlate)
  })
  selectHtmlElement("#parking-lot")?.appendChild(newRow);
  if(save) saveStorage([...parkingLocalStorage(), vehicle])
}