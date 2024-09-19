import { useOrganization } from "@clerk/nextjs";
import { useMutation, useQuery } from "@tanstack/react-query"
import { queryClient } from "@shared/api";
import { TBoard } from "./types"

export const useGetBoard = () => {
    const {organization, isLoaded: isLoadedScope} = useOrganization();
    const {data, isLoading} = useQuery<TBoard[]>({
        queryKey: ['boards'],
        queryFn: async () => { 
            const response = await fetch((`/api/boards?`) + new URLSearchParams({
                scopeId: organization?.id ?? ''
            }).toString())
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
        enabled: !!organization,
    })
    if (!isLoadedScope || isLoading ) {
        return {isLoading: true}
    }
    return  {
        isLoading: false,
        data,
    }
}

export const useCreateBoardMutation = () => {
    const {organization, isLoaded: isLoadedScope} = useOrganization();
    const {mutate} = useMutation<TBoard, Omit<TBoard, 'id' | 'scopeId'>, Omit<TBoard, 'id' | 'scopeId'>>({
        mutationKey: ['createBoard'],
        mutationFn: async (args) => { 
            const response = await fetch(`/api/boards`, {
                method: 'POST',
                body: JSON.stringify({
                    variables: {
                        scopeId: organization?.id,
                        ...args
                    }
                })
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })
    if (!isLoadedScope ) {
        return {isLoading: true}
    }

    queryClient.invalidateQueries({ queryKey: ['boards'] })

    return  {
        isLoading: false,
        createBoard: mutate
    }
}

export const useDeleteCardMutation = () => {
    const {mutate} = useMutation<TBoard, Pick<TBoard, 'id'>, Pick<TBoard, 'id'>>({
        mutationKey: ['deleteBoard'],
        mutationFn: async (args) => { 
            const response = await fetch(`/api/boards`, {
                method: 'DELETE',
                body: JSON.stringify({
                    variables: {
                        ...args
                    }
                })
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })
    queryClient.invalidateQueries({ queryKey: ['boards'] })
    return {deleteBoard: mutate}
}
