import { useQuery, useMutation } from "@tanstack/react-query"
import { queryClient } from "@shared/api";
import { TApiBoardContent, TUpdateCardPositionIndexArgs, TUpdateColumnPositionIndexArgs } from "./types";

export const useGetBoardContent = (id: number) => {
    const {data, isLoading} = useQuery<TApiBoardContent>({
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

export const useChangeColumnPosition = () => {
    const {mutate} = useMutation<void,  TUpdateColumnPositionIndexArgs, TUpdateColumnPositionIndexArgs>({
        mutationKey: ['changeColumnPosition'],
        mutationFn: async (args) => { 
            const response = await fetch((`/api/column/reorder`),
                {
                    method: 'PATCH',
                    body: JSON.stringify(args)
                })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            queryClient.invalidateQueries({ queryKey: ['boardContent'] })

            return response.json()
        },
    })    
    return  {
        changeColumnPosition: mutate
    }
}

export const useChangeCardPosition = () => {
    const {mutate} = useMutation<void,  TUpdateCardPositionIndexArgs, TUpdateCardPositionIndexArgs>({
        mutationKey: ['changeCardPosition'],
        mutationFn: async (args) => { 
            const response = await fetch((`/api/card/reorder`),
                {
                    method: 'PATCH',
                    body: JSON.stringify(args)
                })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            queryClient.invalidateQueries({ queryKey: ['boardContent'] })

            return response.json()
        },
    })    
    return  {
        changeCardPosition: mutate
    }
}