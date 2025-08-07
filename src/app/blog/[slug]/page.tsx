import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { 
  CalendarDaysIcon, 
  ClockIcon, 
  TagIcon, 
  ArrowLeftIcon,
  UserIcon,
  ShareIcon
} from '@heroicons/react/24/outline';
import { getFullPost, getRelatedPosts, formatDate } from '@/lib/blog';
import ShareButton from '@/components/ShareButton';

// GitHub Markdown 样式
import 'github-markdown-css/github-markdown-light.css';
import 'github-markdown-css/github-markdown-dark.css';
// 代码高亮样式
import 'highlight.js/styles/github.css';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getFullPost(slug);
  
  if (!post) {
    return {
      title: '文章未找到'
    };
  }

  return {
    title: `${post.title} | 殷浩玮的博客`,
    description: post.description,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getFullPost(slug);

  if (!post) {
    notFound();
  }

  // 如果文章没有Markdown内容，说明是外部链接文章
  if (!post.content) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          这是一篇外部文章，请点击下方链接查看原文。
        </p>
        {post.externalUrl && (
          <a
            href={post.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ShareIcon className="h-5 w-5" />
            查看原文
          </a>
        )}
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post, 3);

  return (
    <div className="max-w-4xl mx-auto">
      {/* 返回按钮 */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          返回博客列表
        </Link>
      </div>

      {/* 文章头部 */}
      <header className="mb-8">
        <div className="mb-6">
          {/* 分类和精选标签 */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
              {post.category}
            </span>
            {post.featured && (
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                精选文章
              </span>
            )}
          </div>

          {/* 标题 */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* 文章元信息 */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDaysIcon className="h-4 w-4" />
              <time>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4" />
              <span>{post.readTime} 分钟阅读</span>
            </div>
          </div>
        </div>

        {/* 文章描述 */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {post.description}
          </p>
        </div>
      </header>

      {/* 文章内容 - 使用 GitHub Markdown 样式 */}
      <main className="markdown-body bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
          components={{
            // 自定义链接样式，保持与主题一致
            a: ({ href, children, ...props }) => (
              <a
                href={href}
                {...props}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 no-underline hover:underline"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {children}
              </a>
            ),
            // 自定义代码块，确保在深色模式下也能正常显示
            pre: ({ children, ...props }) => (
              <pre
                {...props}
                className="!bg-gray-100 dark:!bg-gray-800 !border !border-gray-200 dark:!border-gray-600 !rounded-lg !p-4 overflow-x-auto"
              >
                {children}
              </pre>
            ),
            code: ({ children, className, ...props }) => {
              const isInlineCode = !className;
              return (
                <code
                  {...props}
                  className={
                    isInlineCode
                      ? "!bg-gray-100 dark:!bg-gray-700 !text-gray-800 dark:!text-gray-200 !px-1 !py-0.5 !rounded !text-sm"
                      : className
                  }
                >
                  {children}
                </code>
              );
            },
            // 自定义表格样式
            table: ({ children, ...props }) => (
              <div className="overflow-x-auto my-6">
                <table {...props} className="min-w-full border-collapse">
                  {children}
                </table>
              </div>
            ),
            // 自定义引用块样式
            blockquote: ({ children, ...props }) => (
              <blockquote
                {...props}
                className="!border-l-4 !border-blue-500 dark:!border-blue-400 !bg-blue-50 dark:!bg-blue-900/20 !p-4 !my-6 !rounded-r-lg"
              >
                {children}
              </blockquote>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </main>

      {/* 文章标签 */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          文章标签
        </h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <Link
              key={tag}
              href={`/blog/tag/${encodeURIComponent(tag)}`}
              className="inline-flex items-center gap-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <TagIcon className="h-4 w-4" />
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* 相关文章 */}
      {relatedPosts.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            相关文章
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map(relatedPost => (
              <article
                key={relatedPost.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-3">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                    {relatedPost.category}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  <Link
                    href={`/blog/${relatedPost.id}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {relatedPost.title}
                  </Link>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-3">
                  {relatedPost.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <time>{formatDate(relatedPost.date)}</time>
                  <span>{relatedPost.readTime} 分钟阅读</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* 分享和导航 */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          返回博客列表
        </Link>
        
        <ShareButton title={post.title} description={post.description} />
      </div>
    </div>
  );
} 