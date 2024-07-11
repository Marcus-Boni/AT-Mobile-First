let items = [
  { id: 1, name: 'Item 1', description: 'Description 1' },
  { id: 2, name: 'Item 2', description: 'Description 2' },
  { id: 3, name: 'Item 3', description: 'Description 3' }
];

export const fakeCreate = (item) => {
  const newItem = { id: items.length + 1, ...item };
  items.push(newItem);
  return newItem;
};
