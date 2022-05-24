import { parkingLocalStorage, saveStorage } from "./saveStorage";
import { calcTime } from "./calcTime";
import { renderVehicle } from "./renderVehicle";

export function remove(licensePlate: string) {
  const { checkIn, name } = parkingLocalStorage().find(vehicle => vehicle.licensePlate === licensePlate)
  const time = calcTime(new Date().getTime() - new Date(checkIn).getTime())

  if(!confirm(`The vehicle ${name}remained for ${time}. Deseja encerrar? `)) return;
  saveStorage(parkingLocalStorage().filter((vehicle) => vehicle.licensePlate !== licensePlate));
  renderVehicle()
}