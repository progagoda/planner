import { TBoard } from "@/entities"
import { IconButton, Title, antIcons } from "@shared/ui";
import { prepareIconProps } from "@shared/utils"
import { StyledFlex } from "./styles";

type THeaderProps = {
    board: TBoard
    handleShowBoardInfo: ()=>void
}

const {EllipsisOutlined} = antIcons

export const Header = ({board, handleShowBoardInfo}: THeaderProps) => {
    return (
        <StyledFlex justify="space-between" align="center">
            <Title level={4}>  
                {board.name}
            </Title>
            <IconButton onClick={handleShowBoardInfo}>
                <EllipsisOutlined style={prepareIconProps('30px')}/>
            </IconButton>
        </StyledFlex>
    )
}