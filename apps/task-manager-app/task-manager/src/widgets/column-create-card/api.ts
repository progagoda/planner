import { useMutation } from "@tanstack/react-query"
import { queryClient } from "@shared/api";
import { TApiColumnCreate, TCreateColumnArgs } from "./types";



export const useCreateColumn= () => {
    const {mutate} = useMutation<TApiColumnCreate,  TCreateColumnArgs, TCreateColumnArgs>({
        mutationKey: ['createColumn'],
        mutationFn: async (args) => { 
            const response = await fetch((`/api/column`),
                {
                    method: 'POST',
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
        createColumn: mutate
    }
}