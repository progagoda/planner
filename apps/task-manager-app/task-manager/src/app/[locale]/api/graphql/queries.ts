import { TBoard, TCard, TColumn } from "@/entities";
import { TCreateBoardArgs, TBoardResultFields, TColumnResultFields, TCreateColumnArgs, TCardResultFields, TCreateCardArgs, TUpdateCardArgs, TUpdateBoardArgs } from "./types";
import { api } from "@/configs/api";

// Board queries
export const createBoard = async (board: TCreateBoardArgs, resultFields: TBoardResultFields) => {
    const query = `
    mutation createBoard($board: CreateBoardInput!) {
      createBoard(createBoardInput: $board) {
        ${resultFields.join(' ')}
      }
    }`;

    const response = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: { board: board }
        })
    }).then(response => response.json())
    
    return JSON.stringify(response.data)
}
export const deleteBoard = async (id: number) => {
    const query = `
  mutation deleteBoard($id: Float!) {
      deleteBoard(id: $id)
  }`;
    const { data } = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: {
                id,
            },
        })
    }).then(response => response.json())
    return JSON.stringify(data)
}
export const getBoardByScopeId = async (scopeId: string, resultFields: TBoardResultFields) => {
    const query = `query {
    getBoardByScopeId(scopeId: "${scopeId}") {
         ${resultFields.join(' ')}
    }
  }`;

    const { data } = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
    }).then(response => response.json())
    return JSON.stringify(data.getBoardByScopeId);
}
export const updateBoard = async (body: Pick<TColumn, 'id'> & TUpdateBoardArgs,  resultFields: TBoardResultFields) => {
    const query = `
        mutation ($board: UpdateBoardInput!) {
            updateBoard(updateBoardInput: $board) {
                ${resultFields.join(' ')}
            }
        }`;
    const {data, errors} = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query,
            variables: {board: body}
        })
    }).then(response => response.json())
    return {data,errors}
}
export const getBoardById = async (boardId: string, resultFields: TBoardResultFields) => {    
    const query = `query {
    getBoardById(id: ${boardId}) {
     ${resultFields.join(' ')}
  }
}`;

    const { data, errors } = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
    }).then(response => response.json())
    return {data: data.getBoardById, errors} ;
}

// Column queries
export const createColumn = async(body: TCreateColumnArgs, resultFields: TColumnResultFields)=> {
    const query = `
  mutation createColumn($column: CreateColumnInput!) {
    createColumn(createColumnInput: $column) {
       ${resultFields.join(' ')}
    }
  }`;
    const {data} = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: { column: body }
        })
    }).then(response => response.json())
    
    return JSON.stringify(data); 
}
export const updateColumn = async (body: Pick<TColumn, 'id'|'name'>,  resultFields: Omit<TColumnResultFields, 'boardId'>) => {
    const query = `
        mutation ($column: UpdateColumnInput!) {
            updateColumn(updateColumnInput: $column) {
                ${resultFields.join(' ')}
            }
        }`;
    const {data, errors} = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query,
            variables: {column: body}
        })
    }).then(response => response.json())
    return {data,errors}
}
export const getColumns = async (boardId: string, resultFields: TColumnResultFields) => {    
    const query = `query {
    getColumnsByBoardId(boardId: "${boardId}") {
     ${resultFields.join(' ')}
  }
}`;

    const { data, errors } = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
    }).then(response => response.json())

    return {data: data.getColumnsByBoardId as TColumn[], errors};
}
export const deleteColumn = async (id: number)=>{
    const query = `
    mutation deleteColumn($id: Float!) {
        deleteColumn(id: $id)
    }`;
    const { data,errors, status } = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: {id},
        })
    }).then(response => response.json())
  
    return {data: data.deleteColumn, errors, status}
}

// Card queries
export const getCard = async (cardId: number, resultFields: TCardResultFields) => {
    const query = `query {
        getCardById(id: ${cardId}) {
             ${resultFields.join(' ')}
        }
      }`;

    const { data, errors } = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
    }).then(response => response.json())

    return {data: data?.getCardById, errors};
}

export const getCards = async (columnId: string, resultFields: TCardResultFields): Promise<TCard[]>=>{
    const query = `query {
        getCardsByColumnId(columnId: ${columnId}) {
             ${resultFields.join(' ')}
        }
      }`;

    const { data } = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
    }).then(response => response.json())

    return data.getCardsByColumnId;
}

export const createCard = async(body: TCreateCardArgs, resultFields: TCardResultFields)=> {
    const query = `
        mutation createCard($card: CreateCardInput!) {
            createCard(createCardInput: $card) {
            ${resultFields.join(' ')}
            }
        }`;

    const {data, errors} = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: { card: body }
        })
    }).then(response => response.json())
    return {data, errors}
}
export const deleteCard = async (id: number) => {
    const query = `
  mutation deleteCard($id: Float!) {
      deleteCard(id: $id)
  }`;
    const { data,errors, status } = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: {
                id,
            },
        })
    }).then(response => response.json())

    return {data, errors, status}
}
export const updateCard = async (body: Pick<TCard, 'id'> & TUpdateCardArgs, resultFields: TCardResultFields) => {
    const query = `
    mutation ($card: UpdateCardInput!) {
        updateCard(updateCardInput: $card) {
            ${resultFields.join(' ')}
        }
    }`;
    const {data, errors} = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query,
            variables: {card: body}
        })
    }).then(response => response.json())
    return {data: data?.updateCard, errors}
}