import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

/**
 * author: string
 * title: string
 * content: string
 * likeCount: number
 * commentCount: number
 */

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPost(): Post {
    return {
      author: 'NewJeans_Official',
      title: '뉴진스 민지',
      content: '메이크업 고치고 있는 민지',
      likeCount: 1000000,
      commentCount: 999999,
    };
  }
}
