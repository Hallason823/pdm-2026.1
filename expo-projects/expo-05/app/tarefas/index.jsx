import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTarefas, adicionarTarefa, atualizarTarefa, deletarTarefa  } from "@/back4app";

export default function TarefasPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data, isFetching } = useQuery({
    queryKey: ["tarefas"],
    queryFn: getTarefas,
  });
  const mutation = useMutation({
    mutationFn: adicionarTarefa,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
    },
  });
  const updateMutation = useMutation({
  mutationFn: ({ id, dados }) => atualizarTarefa(id, dados),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["tarefas"] });
  },
  });
  const deleteMutation = useMutation({
  mutationFn: deletarTarefa,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["tarefas"] });
  },
  });

  const [descricao, setDescricao] = useState("");

  async function handleAdicionarTarefaPress() {
    if (descricao.trim() === "") {
      Alert.alert("Descrição inválida", "Preencha a descrição da tarefa", [
        { text: "OK", onPress: () => {} },
      ]);
      return;
    }
    mutation.mutate({ descricao, concluida: false });
    setDescricao("");
  }

  return (
    <View style={styles.container}>
      {(isFetching || mutation.isPending) && <ActivityIndicator size="large" />}
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <Button
        title="Adicionar Tarefa"
        onPress={handleAdicionarTarefaPress}
        disabled={mutation.isPending}
      />
      <View style={styles.hr} />
      <View style={styles.tasksContainer}>
        {data?.map((t) => (
          <View key={t.objectId} style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
            <TouchableOpacity 
              style={{ flex: 1 }}
              onPress={() => router.push(`/tarefas/${t.objectId}`)}
            >
              <Text style={[styles.taskText, t.concluida && styles.strikethroughText]}>
                {t.descricao}
              </Text>
            </TouchableOpacity>
            <Switch
              value={t.concluida}
              onValueChange={(valor) =>
                updateMutation.mutate({
                  id: t.objectId,
                  dados: { concluida: valor },
                })
              }
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  tasksContainer: {
    paddingLeft: 15,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "90%",
    marginBottom: 5,
  },
  hr: {
    height: 1,
    backgroundColor: "black",
    width: "95%",
    marginVertical: 10,
  },
  taskText: {
  marginHorizontal: 12,
  },
  strikethroughText: {
    textDecorationLine: "line-through", // Key property for strikethrough
    textDecorationStyle: "solid", // Optional: Style of the line
    textDecorationColor: "red", // Optional: Color of the line (iOS only)
    // Other styles like fontSize, fontWeight, color can also be applied
  },
});
