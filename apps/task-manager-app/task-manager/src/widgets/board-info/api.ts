import { useMutation } from "@tanstack/react-query"
import { TBoard } from "@/entities";
import { queryClient } from "@shared/api";
import { TChangeBoardInfoArgs } from "./types";



export const useChangeBoardInfo = () => {
    const {mutate} = useMutation<TBoard, TChangeBoardInfoArgs, TChangeBoardInfoArgs>({
        mutationKey: ['changeBoardInfo'],
        mutationFn: async (args) => { 
            const response = await fetch((`/api/board/${args.id}`),
                {
                    method: 'PATCH',
                    body: JSON.stringify({
                        background: args.background,
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
        changeBoardInfo: mutate
    }
}