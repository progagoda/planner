import { useMutation } from "@tanstack/react-query"
import { TColumn } from "@/entities";
import { queryClient } from "@shared/api";
import { TApiColumnChange } from "./types";



export const useChangeColumnName = (id: string) => {
    const {mutate} = useMutation<TApiColumnChange,  Pick<TColumn, 'name'>, Pick<TColumn, 'name'>>({
        mutationKey: ['changeColumnName'],
        mutationFn: async (args) => { 
            const response = await fetch((`/api/column/${id}`),
                {
                    method: 'PATCH',
                    body: JSON.stringify({
                        name: args.name
                    })
                })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })

    queryClient.invalidateQueries({ queryKey: ['boardContent'] })
    
    return  {
        changeColumnName: mutate
    }
}