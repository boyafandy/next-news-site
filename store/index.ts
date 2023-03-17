import {createStore, Store, combineReducers } from 'redux'
import { MakeStore,createWrapper } from 'next-redux-wrapper'
import {comments, CommentsState} from './comments'
import {post, PostState} from './post'

export type State = {
  post: PostState
  comments: CommentsState
}

const combinedReducer = combineReducers({post, comments})

const makeStore: MakeStore<Store<State>> = () => {
  return createStore(combinedReducer)
}

export const store = createWrapper<Store<State>>(makeStore, {debug: true})