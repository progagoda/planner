import { useEffect, useState } from "react"
import { TCard } from "@/entities"
import { useArchiveCard } from "./api"
import { StyledCard } from "./styles"

type TCardProps = {
    card: Pick<TCard, 'id'| 'name'>
    handleOpenInfo: (cardId: number)=> void
}

export const Card = ({card, handleOpenInfo}: TCardProps) => {
    const [isActive, setIsActive] = useState(false);
    const {archiveCard} = useArchiveCard()
    
    const handleArchive = (event: KeyboardEvent) => {
        if (isActive && (event.key === 'c' || event.key === 'C')){
            archiveCard({id:card.id});
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleArchive);
        return () => {
            window.removeEventListener('keydown', handleArchive);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive]);

    return (
        <StyledCard 
            onMouseLeave={()=>setIsActive(false)}
            onMouseEnter={()=> setIsActive(true)} onClick={()=> handleOpenInfo(card.id)}>
            {card.name}
        </StyledCard>
    )
}