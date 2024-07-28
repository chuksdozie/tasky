import { API } from "@/api/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const URL = "/taskboard";

export const useGetAllTaskboards = () => {
  return useQuery({
    queryKey: ["taskboards"],
    queryFn: () => API.get(`${URL}/all`),
    refetchOnWindowFocus: true,
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 20,
    keepPreviousData: true,
  });
};

export const useCreateTaskboard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => API.post(`${URL}/create`, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["taskboards"] });
    },
  });
};
export const useUpdateTaskboard = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => API.post(`${URL}/update`, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["taskboard", id] });
    },
  });
};
export const useGetTaskboard = (id) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [`taskboard`, id],
    queryFn: () => API.get(`${URL}/${id}`),
    refetchOnWindowFocus: true,
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 20,
    keepPreviousData: true,
  });
};
