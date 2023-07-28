import { blockContent } from './schemas/blockContent';
import { category } from './schemas/category';
import { post } from './schemas/post';
import { author } from './schemas/author';
import { project } from './schemas/project';
import { emailSubscribers } from './schemas/emailSubscribers';

export const schema = {
  types: [post, author, category, blockContent, project, emailSubscribers],
};
