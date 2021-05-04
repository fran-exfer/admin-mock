export async function login(typedUsername, typedPassword) {
  let data = await fetch('http://localhost:3004/auth');
  data = await data.json();

  return typedUsername === data.username && typedPassword === data.password;
}

export function createData(datatype, data) {
  return fetch(`http://localhost:3004/${datatype}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
