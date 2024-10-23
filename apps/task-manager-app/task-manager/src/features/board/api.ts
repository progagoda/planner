import { useQuery } from "@tanstack/react-query"
import { TApiBoardContent } from "./types";

export const useGetBoardContent = (id: number) => {
    const {data, isLoading} = useQuery<TApiBoardContent[]>({
        queryKey: ['boardContent'],
        queryFn: async () => { 
            const response = await fetch((`/api/board/${id}`))
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })

    return  {
        isLoading: isLoading,
        data,
    }
}