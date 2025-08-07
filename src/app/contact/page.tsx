import type { Metadata } from 'next';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: '联系我',
  description: '联系殷浩玮，获取合作机会或技术交流',
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          联系我
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          欢迎与我交流技术、合作或分享想法
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              联系方式
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    邮箱
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    yinhaowei@example.com
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    工作日24小时内回复
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    微信
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    yhw734058719
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    添加时请注明来意
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    位置
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    中国
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    支持远程协作
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              社交媒体
            </h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-gray-900 dark:bg-gray-700 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <span className="text-lg">📱</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-lg">💼</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                aria-label="Email"
              >
                <span className="text-lg">📧</span>
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              🚀 目前状态
            </h3>
            <p className="text-blue-800 dark:text-blue-200">
              正在寻找新的机会和有趣的项目合作。欢迎讨论前端开发、数据分析或人工智能相关的工作。
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            发送消息
          </h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                姓名 *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="请输入您的姓名"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                邮箱 *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                主题 *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="请简述您的需求"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                消息内容 *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                placeholder="请详细描述您的想法或需求..."
              />
            </div>

            <div className="flex items-start">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                我同意处理我的个人信息以回复此询问 *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors"
            >
              发送消息
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          常见问题
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              💼 合作机会
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              我对前端开发、全栈项目和数据分析相关的工作机会很感兴趣。欢迎联系我讨论合作。
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              🤝 技术交流
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              很乐意与同行交流技术心得，分享项目经验，或讨论最新的技术趋势。
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              📚 学习指导
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              如果你在学习前端开发或数据分析过程中遇到问题，欢迎与我交流。
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              ⏰ 响应时间
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              我通常在工作日24小时内回复邮件，周末可能会稍微延迟。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 