import { Category, EntityId } from "./types";

type PostStaticParams = {
  id: EntityId;
};

type PostStaticPath = {
  params: PostStaticParams;
};

type CategoryStaicParams = {
  id: Category;
};

type CategoryStaticPath = {
  params: CategoryStaicParams;
};

const staticPostsIdList: EntityId[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const postPaths: PostStaticPath[] = staticPostsIdList.map((id) => ({
  params: { id: String(id) },
}));

const categoriesToPreRender: Category[] = ["Science", "Technology", "Arts"];

export const categoryPaths: CategoryStaticPath[] = categoriesToPreRender.map(
  (category) => ({
    params: { id: category },
  })
);
