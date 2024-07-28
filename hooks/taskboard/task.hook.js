import { API } from "@/api/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const URL = "/taskboard/task";

export const useCreateTask = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => API.post(`${URL}/create`, data),
    onSuccess: () => {
      // Invalidate and refetch
      console.log({ idzz: id });
      queryClient.invalidateQueries({ queryKey: [`taskboard`, id] });
    },
  });
};
