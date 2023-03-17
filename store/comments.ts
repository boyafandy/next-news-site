import { Comment } from "../shared/types"
import {AnyAction} from 'redux'
import {HydrateAction} from "./hydrate"
import { HYDRATE } from "next-redux-wrapper"

export type CommentsState = Comment[]

export const UPDATE_COMMENTS_ACTION = "UPDATE_COMMENTS"

export interface UpdateCommentsAction extends AnyAction {
  type: typeof UPDATE_COMMENTS_ACTION
  comments: Comment[]
}

type CommentAction = HydrateAction | UpdateCommentsAction

export const comments = (
  state: CommentsState = [],
  action: CommentAction
) => {
  switch (action.type){
    case HYDRATE:
      return action.payload?.comments ?? []
    case UPDATE_COMMENTS_ACTION:
      return action.comments
    default:
      return state
  }
}