import React from "react"
import { Comment as CommentType } from "../../shared/types"
import { Container, Author, Body, Meta } from "./style"

type CommentProps = {
  children?: React.ReactNode
  comment: CommentType
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <Container>
      <Author>{comment.author}</Author>
      <Body>{comment.content}</Body>
      <Meta>{comment.time}</Meta>
    </Container>
  )
}
