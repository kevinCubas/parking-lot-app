import { IVehicle } from "./addVehicle";

export function parkingLocalStorage(): IVehicle[] {
  return localStorage.parking ? JSON.parse(localStorage.parking) : []
}

export function saveStorage(vehicles: IVehicle[]) {
  localStorage.setItem("parking", JSON.stringify(vehicles))
}