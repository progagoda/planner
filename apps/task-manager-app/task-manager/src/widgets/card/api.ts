import { useMutation } from "@tanstack/react-query"
import { queryClient } from "@shared/api";
import { TApiCardArchive, TArchiveCardArgs } from "./types";



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