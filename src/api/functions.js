const HOST = 'http://localhost:3004';

export async function login(typedUsername, typedPassword) {
  let data = await fetch(`${HOST}/auth`);
  data = await data.json();

  return typedUsername === data.username && typedPassword === data.password;
}

export async function fetchData(datatype) {
  const data = await fetch(`${HOST}/${datatype}`);
  return data.json();
}

export async function createData(dataArray, datatype, data) {
  data = { id: Math.max(...dataArray.map((item) => item.id)) + 1, ...data };

  const newItem = await fetch(`${HOST}/${datatype}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return newItem.json();
}

export async function updateData(datatype, id, data) {
  data = { id, ...data };

  const updatedItem = await fetch(`${HOST}/${datatype}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return updatedItem.json();
}

export function deleteData(datatype, id) {
  return fetch(`${HOST}/${datatype}/${id}`, {
    method: 'DELETE',
  });
}
