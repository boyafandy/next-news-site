import Link from "next/link";
import { Post } from "../../shared/types";
import { Container } from "./styles";


type BreadcrumbsProps = {
  post: Post;
};

export const Breadcrumbs = ({post}: BreadcrumbsProps) => {
  return (
    <Container>
      <Link href={`/category/${post.category}`} legacyBehavior>
        <a>{post.category}</a>
      </Link>
    </Container>
  )
}