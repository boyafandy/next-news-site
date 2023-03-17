import { Comment, Post as PostType } from "../../shared/types";
import { Loader } from "../../components/Loader";
import { PostBody } from "../../components/Post/PostBody";
import { Comments } from "../../components/Comments";
import { fetchComments,  fetchPost } from "../../request";
import { useSelector } from "react-redux";
import { State, store } from "../../store";
import { PostState, UPDATE_POST_ACTION } from "../../store/post";
import { NextPage } from "next";
import { CommentsState, UPDATE_COMMENTS_ACTION } from "../../store/comments";

type PostProps = {
  post: PostType;
  comments: Comment[];
};

// export const getStaticProps = async ({ params }) => {
//   if (typeof params.id !== "string") throw new Error("Unexpected id");
//   const post = await fetchPost(params.id);
//   return { props: { post } };
// };

// export const getServerSideProps = async ({ params }) => {
//   if (typeof params.id !== "string") throw new Error("Unexpected id");
//   const post = await fetchPost(params.id);
//   const comments = await fetchComments(params.id);
//   return { props: { post, comments } };
// };

// export async function getStaticPaths() {
//   return { paths, fallback: true };
// }

const Post: NextPage = () => {
  // const router = useRouter();
  const post = useSelector<State, PostState>(({ post }) => post);
  const comments = useSelector<State, CommentsState>(
    ({ comments }) => comments
  );
  if (!post) return <Loader />;
  // if (router.isFallback) return <Loader />;
  return (
    <>
      <PostBody post={post} />
      <Comments comments={comments} post={post.id} />
    </>
  );
};

export const getServerSideProps = store.getServerSideProps(
  (store) => {
    return async ({params}) => {
      if(typeof  params.id !== "string") {
        throw new Error('Unexpected id')
      } 

      const comments = await fetchComments(params.id)
      console.log(comments);
      const post = await fetchPost(params.id)
      console.log(post);
      
      store.dispatch({type: UPDATE_POST_ACTION, post})
      store.dispatch({type: UPDATE_COMMENTS_ACTION, comments})
      
      return null
    }
  }
)

export default Post;
