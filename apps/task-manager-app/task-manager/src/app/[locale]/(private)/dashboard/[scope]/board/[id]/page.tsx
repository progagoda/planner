import { BoardFeature } from '@/features'

const {Board} = BoardFeature

type TBoardPageProps = Readonly<{
    params: {
        id: string,
        locale: string;
        scope: string;
    }
}>

export default function BoardPage({ params }: TBoardPageProps) {
    return  (
        <Board id={params.id}/>
    )
}