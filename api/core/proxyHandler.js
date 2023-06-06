export const handler = {
  get(target, prop, receiver) {
    if (target._schema[prop]) {
      return target._data[prop];
    }
    if (prop === "_id") return target._data[prop];
    if (prop === "id") return target._data["_id"];
    return target[prop];
  },
  set(target, prop, value) {
    console.log(prop, target._schema[prop]);
    if (target._schema[prop]) {
      if (target._schema[prop].hashed) {
        return (target._data[prop] = hash(value));
      } else return (target._data[prop] = value);
    } else return (target[prop] = value);
  },
};
