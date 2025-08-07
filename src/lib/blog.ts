import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogConfig, BlogMetadata } from '@/types/blog';

// 博客配置文件路径
const BLOG_CONFIG_PATH = path.join(process.cwd(), 'src/data/blog-config.json');
const POSTS_DIRECTORY = path.join(process.cwd(), 'src/data/posts');

/**
 * 获取博客配置
 */
export function getBlogConfig(): BlogConfig {
  try {
    const configContent = fs.readFileSync(BLOG_CONFIG_PATH, 'utf8');
    return JSON.parse(configContent) as BlogConfig;
  } catch (error) {
    console.error('Error reading blog config:', error);
    return { posts: [], categories: [], tags: [] };
  }
}

/**
 * 获取所有已发布的博客文章
 */
export function getAllPosts(): BlogPost[] {
  const config = getBlogConfig();
  return config.posts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * 获取精选文章
 */
export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured);
}

/**
 * 根据分类获取文章
 */
export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.category === category);
}

/**
 * 根据标签获取文章
 */
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(tag));
}

/**
 * 根据ID获取单篇文章
 */
export function getPostById(id: string): BlogPost | null {
  const config = getBlogConfig();
  return config.posts.find(post => post.id === id && post.published) || null;
}

/**
 * 获取文章的Markdown内容
 */
export function getPostContent(markdownFile: string): { content: string; metadata: BlogMetadata } | null {
  try {
    const filePath = path.join(POSTS_DIRECTORY, markdownFile);
    
    if (!fs.existsSync(filePath)) {
      console.error(`Markdown file not found: ${filePath}`);
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
      content,
      metadata: data as BlogMetadata
    };
  } catch (error) {
    console.error(`Error reading markdown file ${markdownFile}:`, error);
    return null;
  }
}

/**
 * 获取完整的文章数据（包含内容）
 */
export function getFullPost(id: string): (BlogPost & { content?: string }) | null {
  const post = getPostById(id);
  if (!post) return null;

  if (post.markdownFile) {
    const postContent = getPostContent(post.markdownFile);
    if (postContent) {
      return {
        ...post,
        content: postContent.content
      };
    }
  }

  return post;
}

/**
 * 搜索文章
 */
export function searchPosts(query: string): BlogPost[] {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return getAllPosts();

  return getAllPosts().filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.description.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.category.toLowerCase().includes(searchTerm)
  );
}

/**
 * 获取相关文章（基于标签相似度）
 */
export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts().filter(post => post.id !== currentPost.id);
  
  // 计算标签相似度
  const postsWithScore = allPosts.map(post => {
    const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    const score = commonTags.length;
    return { post, score };
  });

  // 按相似度排序，取前N篇
  return postsWithScore
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

/**
 * 获取最新文章
 */
export function getLatestPosts(limit: number = 5): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

/**
 * 获取所有分类
 */
export function getAllCategories(): string[] {
  const config = getBlogConfig();
  return config.categories;
}

/**
 * 获取所有标签
 */
export function getAllTags(): string[] {
  const config = getBlogConfig();
  return config.tags;
}

/**
 * 获取分类统计
 */
export function getCategoryStats(): { category: string; count: number }[] {
  const posts = getAllPosts();
  const categoryCount: Record<string, number> = {};

  posts.forEach(post => {
    categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
  });

  return Object.entries(categoryCount)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * 获取标签统计
 */
export function getTagStats(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const tagCount: Record<string, number> = {};

  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCount)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * 格式化日期
 */
export function formatDate(dateString: string, locale: string = 'zh-CN'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * 计算阅读时间
 */
export function calculateReadingTime(content: string): number {
  // 中文字符数 + 英文单词数
  const chineseChars = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = content.replace(/[\u4e00-\u9fa5]/g, '').split(/\s+/).filter(word => word.length > 0).length;
  
  // 假设中文200字/分钟，英文250词/分钟
  const readingTime = Math.ceil((chineseChars / 200) + (englishWords / 250));
  return Math.max(1, readingTime);
} 