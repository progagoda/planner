import { TCard } from "@/entities"
import { StyledCard } from "./styles"

type TCardProps = {
    card: Pick<TCard, 'id'| 'name'>
}
export const Card = ({card}: TCardProps) => {
    return (
        <StyledCard>
            {card.name}
        </StyledCard>
    )
}