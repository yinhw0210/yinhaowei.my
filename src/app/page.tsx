import Link from 'next/link';
import { ArrowRightIcon, CalendarDaysIcon, ClockIcon, BookOpenIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { getLatestPosts, getFeaturedPosts, formatDate } from '@/lib/blog';

export default function Home() {
  const latestPosts = getLatestPosts(2);
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            你好，我是
            <span className="text-blue-600 dark:text-blue-400"> 殷浩玮</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            一名热爱技术的开发者，专注于前端开发、数据分析和人工智能。
            在这里分享我的学习心得、项目经验和生活感悟。
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            了解更多
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            查看博客
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          技能专长
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-blue-600 dark:text-blue-400 text-2xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              前端开发
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              熟练使用 React、Next.js、TypeScript 等现代前端技术栈
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">React</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">Next.js</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">TypeScript</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-green-600 dark:text-green-400 text-2xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              数据分析
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              运用 Python、SQL 等工具进行数据处理和分析
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">Python</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">Pandas</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">SQL</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-purple-600 dark:text-purple-400 text-2xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              人工智能
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              探索机器学习和深度学习的应用与实践
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">TensorFlow</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">PyTorch</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">Scikit-learn</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              精选文章
            </h2>
            <Link
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              查看全部 →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map(post => (
              <article 
                key={post.id} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <CalendarDaysIcon className="h-4 w-4" />
                    <time>{formatDate(post.date)}</time>
                  </div>
                  <span className="mx-2">•</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                    {post.category}
                  </span>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
                    精选
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {post.markdownFile && (
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                      >
                        <BookOpenIcon className="h-4 w-4" />
                        阅读全文
                      </Link>
                    )}
                    {post.externalUrl && (
                      <a
                        href={post.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium text-sm"
                      >
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        查看原文
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                    <ClockIcon className="h-4 w-4" />
                    <span>{post.readTime} 分钟</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Latest Blog Posts */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            最新文章
          </h2>
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            查看全部 →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPosts.map(post => (
            <article 
              key={post.id} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <CalendarDaysIcon className="h-4 w-4" />
                  <time>{formatDate(post.date)}</time>
                </div>
                <span className="mx-2">•</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {post.markdownFile && (
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                    >
                      <BookOpenIcon className="h-4 w-4" />
                      阅读全文
                    </Link>
                  )}
                  {post.externalUrl && (
                    <a
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium text-sm"
                    >
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                      查看原文
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                  <ClockIcon className="h-4 w-4" />
                  <span>{post.readTime} 分钟</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
