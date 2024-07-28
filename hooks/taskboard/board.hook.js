import { API } from "@/api/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const URL = "/taskboard/board";

export const useCreateBoard = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => API.post(`${URL}/create`, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [`taskboard`, id] });
    },
  });
};
