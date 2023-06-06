import { hash as _hash, compare as _compare } from "bcrypt";

export async function hash(value="") {
  return await _hash(value, 10);
}

export async function compare(value,hValue) {
  return await _compare(value, hValue)
}

