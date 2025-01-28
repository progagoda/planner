import { useMutation } from "@tanstack/react-query"
import { queryClient } from "@shared/api";
import { TApiCardCreate, TCreateCardArgs } from "./types";



export const useCreateCard= () => {
    const {mutate} = useMutation<TApiCardCreate, TCreateCardArgs, TCreateCardArgs>({
        mutationKey: ['createCard'],
        mutationFn: async (args) => { 
            const response = await fetch((`/api/card`),
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
        createCard: mutate
    }
}