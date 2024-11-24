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
            queryClient.invalidateQueries({ queryKey: ['boardContent'] })
            return response.json()
        },
    })    
    return  {
        changeColumnName: mutate
    }
}

export const useDeleteColumn= (id: string) => {
    const {mutate} = useMutation<TColumn,void, void>({
        mutationKey: ['changeColumnName'],
        mutationFn: async (args) => { 
            const response = await fetch((`/api/column/${id}`),
                {
                    method: 'DELETE',
                    body: JSON.stringify({
                        columnId: id
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
        deleteColumn: mutate
    }
}