export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  readTime: number; // 预估阅读时间（分钟）
  coverImage?: string;
  externalUrl?: string; // 外部链接，如果有则显示"查看原文"
  markdownFile?: string; // 本地markdown文件名，如果有则显示"阅读全文"
  featured?: boolean; // 是否为精选文章
  published: boolean;
}

export interface BlogConfig {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
}

export interface BlogMetadata {
  title: string;
  date: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  coverImage?: string;
  externalUrl?: string;
} 