import { View, TextInput, Button, Switch, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams, useRouter, Stack } from "expo-router"; // Importe Stack aqui
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTarefa, atualizarTarefa, deletarTarefa } from "@/back4app";
import { useState } from "react";

export default function Detalhe() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const qc = useQueryClient();
  const [form, setForm] = useState(null);
  const { isLoading } = useQuery({
    queryKey: ["tarefa", id],
    queryFn: () => getTarefa(id).then(res => { 
      setForm({ descricao: res.descricao, concluida: res.concluida }); 
      return res; 
    }),
    enabled: !!id,
  });
  const up = useMutation({
    mutationFn: (dados) => atualizarTarefa(id, dados),
    onSuccess: () => { qc.invalidateQueries(["tarefas"]); router.back(); },
  });
  const del = useMutation({
    mutationFn: () => deletarTarefa(id),
    onSuccess: () => { qc.invalidateQueries(["tarefas"]); router.replace("/"); },
  });

  if (isLoading || !form) return <ActivityIndicator style={{flex:1}} />;

  return (
    <View style={styles.c}>
      <Stack.Screen options={{ title: `Tarefa #${id}` }} />
      <TextInput 
        style={styles.i} 
        value={form.descricao} 
        onChangeText={t => setForm({...form, descricao: t})} 
      />
      <View style={styles.r}>
        <Switch value={form.concluida} onValueChange={v => setForm({...form, concluida: v})} />
      </View>
      <Button title={up.isPending ? "Salvando..." : "Salvar"} onPress={() => up.mutate(form)} />
      <Button title="Excluir" color="red" onPress={() => del.mutate()} />
    </View>
  );
}
const styles = StyleSheet.create({
  c: { flex: 1, padding: 20, justifyContent: "center", gap: 15 },
  i: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5 },
  r: { alignItems: "center", marginBottom: 10 }
});
