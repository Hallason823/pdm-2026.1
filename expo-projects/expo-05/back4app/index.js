import axios from "axios";

const urlBase = "https://parseapi.back4app.com/classes/Tarefa";
const headers = {
  "X-Parse-Application-Id": "FPSu5pfRORdlUUxPUtt0AqKaLBzOEdBHLUjmW8kz",
  "X-Parse-JavaScript-Key": "IBPDGadrYiX0J6S0UP8Yg7bOfCkMnaIfUBQecQIy",
};
const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};

export async function getTarefas() {
  const response = await axios.get(urlBase, {
    headers: headers,
  });
  return response.data.results;
}

export async function adicionarTarefa(novaTarefa) {
  const response = await axios.post(urlBase, novaTarefa, {
    headers: headersJson,
  });
  return response.data;
}
