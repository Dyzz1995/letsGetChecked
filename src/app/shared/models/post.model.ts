import { ElementRef } from '@angular/core';
import { Comment } from './comment.model';

export class Post {
  // {
  //   "id": 1,
  //   "title": "Blog post #1",
  //   "author": "Melissa Manges",
  //   "publish_date": "2016-02-23",
  //   "slug": "blog-post-1",
  //   "description": "Utroque denique invenire et has.",
  //   "content": "<p>Utroque denique invenire et has. Cum case definitiones no, est dicit placerat verterem ne.</p> <p>In ius nonumy perfecto adipiscing, ad est cibo iisque aliquid, dicit civibus eum ei. Cum animal suscipit at, utamur utroque appareat sed ex.</p>"
  // },
  id!: number;
  title!: string;
  author!: string;
  publish_date!: string;
  slug!: string;
  description!: string;
  content!: string;
  comments?: Comment[];
  expanded?: boolean = true;
}
