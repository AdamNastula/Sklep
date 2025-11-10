import type { Product } from "../api/jInshanBodyShopApi.schemas";

export function saveMapToLocalStorage<K extends string | [number, Product], V>(
  key: string,
  map: Map<K, V>,
) {
  const entries = Array.from(map.entries());
  localStorage.setItem(key, JSON.stringify(entries));
}

export function loadMapFromLocalStorage<
  K extends string | [Product, number],
  V,
>(key: string): Map<K, V> {
  const json = localStorage.getItem(key);
  if (!json) return new Map<K, V>();

  try {
    const entries: [K, V][] = JSON.parse(json);
    return new Map(entries);
  } catch (e) {
    console.error("Błąd przy odczycie mapy z localStorage:", e);
    return new Map<K, V>();
  }
}
