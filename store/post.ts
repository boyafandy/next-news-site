import { Post, Optional } from "../shared/types"
import {AnyAction} from 'redux'
import { HydrateAction } from "./hydrate"
import { HYDRATE } from "next-redux-wrapper"

export type PostState = Optional<Post>

export const UPDATE_POST_ACTION = "UPDATE_POST"

export interface UpdatePostAction extends AnyAction {
  type: typeof UPDATE_POST_ACTION
  post: Post
}

type PostAction = HydrateAction | UpdatePostAction

export const post = (state: PostState = null, action: PostAction) => {
  switch(action.type){
    case HYDRATE:
      return action.payload?.post ?? null
    case UPDATE_POST_ACTION:
      return action.post
    default: 
      return state 
  }
}