import Link from "next/link";
import { Post } from "../../shared/types";
import { PostCard } from "../Post";
import { Grid, Title, MoreLink } from "./style";

type SectionProps = {
  title: string
  posts: Post[]
  isCompact?: boolean
}

export const Section = ({title, posts, isCompact}: SectionProps) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        {posts.map(post => {
          return <PostCard key={post.id} post={post}/>
        }) }
        {isCompact && (<Link href={`/category/${title}`} passHref legacyBehavior>
          <MoreLink>More in {title}</MoreLink>
        </Link>)}
      </Grid>
    </section>
  )
}