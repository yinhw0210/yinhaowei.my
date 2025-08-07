import Link from 'next/link';
import { ClockIcon, TagIcon, CalendarDaysIcon, ArrowTopRightOnSquareIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { getAllPosts, getAllCategories, formatDate } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="max-w-6xl mx-auto">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          技术博客
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          分享我的技术见解、学习心得和开发经验
        </p>
      </div>

      {/* 分类导航 */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <Link
            href="/blog"
            className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            全部文章 ({posts.length})
          </Link>
          {categories.map(category => {
            const count = posts.filter(post => post.category === category).length;
            return (
              <Link
                key={category}
                href={`/blog/category/${encodeURIComponent(category)}`}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {category} ({count})
              </Link>
            );
          })}
        </div>
      </div>

      {/* 博客文章列表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {posts.map(post => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* 文章封面图片（如果有的话） */}
            {post.coverImage && (
              <div className="aspect-video bg-gray-100 dark:bg-gray-700">
                {/* 这里可以添加图片组件 */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-sm">封面图片</span>
                </div>
              </div>
            )}

            <div className="p-6">
              {/* 文章元信息 */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <CalendarDaysIcon className="h-4 w-4" />
                  <time>{formatDate(post.date)}</time>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>{post.readTime} 分钟阅读</span>
                </div>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
                    精选
                  </span>
                )}
              </div>

              {/* 文章标题 */}
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                {post.title}
              </h2>

              {/* 文章描述 */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.description}
              </p>

              {/* 标签 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                  >
                    <TagIcon className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                    +{post.tags.length - 3}
                  </span>
                )}
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-3">
                {/* 阅读全文按钮 - 只在有markdown文件时显示 */}
                {post.markdownFile && (
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <BookOpenIcon className="h-4 w-4" />
                    阅读全文
                  </Link>
                )}

                {/* 查看原文按钮 - 只在有外部链接时显示 */}
                {post.externalUrl && (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    查看原文
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* 空状态 */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-600 mb-4">
            <BookOpenIcon className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            暂无文章
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            精彩内容即将发布，敬请期待！
          </p>
        </div>
      )}

      {/* 分页（如果需要的话） */}
      {posts.length > 12 && (
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            加载更多文章
          </button>
        </div>
      )}
    </div>
  );
} 