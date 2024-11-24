import { useQuery, useMutation } from "@tanstack/react-query"
import { queryClient } from "@shared/api";
import { TApiCardArchive, TApiCardInfo, TApiCardInfoChangeArgs, TArchiveCardArgs } from "./types"

export const useGetCardInfo = (id: number) => {
    const {data, isLoading} = useQuery<TApiCardInfo>({
        queryKey: ['cardInfo', id],
        queryFn: async () => { 
            const response = await fetch((`/api/card/${id}`))
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
        enabled: !!id,
    })

    return  {
        isLoading: isLoading,
        data: data,
    }
}

export const useChangeCardInfo = (id: number) => {
    const {mutate} = useMutation<TApiCardInfo, TApiCardInfoChangeArgs, TApiCardInfoChangeArgs>({
        mutationKey: ['changeCardInfo'],
        mutationFn: async (args) => { 
            const response = await fetch((`/api/card/${id}`),
                {
                    method: 'PATCH',
                    body: JSON.stringify({
                        ...args
                    })
                })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            queryClient.invalidateQueries({ queryKey: ['boardContent'] })
            return response.json()
        },
    })

    return  {
        changeCardInfo: mutate
    }
}

export const useArchiveCard= () => {
    const {mutate} = useMutation<TApiCardArchive, TArchiveCardArgs, TArchiveCardArgs>({
        mutationKey: ['archiveCard'],
        mutationFn: async (args) => { 
            const response = await fetch((`/api/card/${args.id}`),
                {
                    method: 'DELETE',
                })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            queryClient.invalidateQueries({ queryKey: ['boardContent'] })
            return response.json()
        },
    })

    return  {
        archiveCard: mutate
    }
}