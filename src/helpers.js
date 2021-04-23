const choice = (items) => {
  let index = Math.floor(Math.random() * items.length);
  return items[index];
};

const remove = (items, toRemove) => {
  for (let [i, item] of items.entries()) {
    if (item === toRemove) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
};

export { choice, remove };
