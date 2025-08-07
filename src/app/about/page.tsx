import type { Metadata } from 'next';
import Avatar from '@/assets/avatar.png'
import Image from 'next/image';

export const metadata: Metadata = {
  title: '关于我',
  description: '了解殷浩玮的个人背景、教育经历、技能专长和兴趣爱好',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          关于我
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Hello! 我是殷浩玮，很高兴认识你
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Profile Image */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
              <Image src={Avatar} alt="Avatar" className="w-full h-full object-cover rounded-lg" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
              殷浩玮
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              全栈开发者 & 数据分析师
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="w-5 h-5 mr-3">📧</span>
                <span className="text-sm">hi@yinhaowei.my</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="w-5 h-5 mr-3">📍</span>
                <span className="text-sm">中国 | 济南</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="w-5 h-5 mr-3">🎓</span>
                <span className="text-sm">计算机科学专业</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              个人简介
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                我是一名充满热情的软件开发者，专注于前端开发、数据分析和人工智能领域。
                拥有扎实的计算机科学基础和丰富的项目实践经验。
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                在技术方面，我熟练掌握现代前端框架如 React、Next.js，
                同时具备数据分析和机器学习的实践能力。我相信技术的力量能够改变世界，
                致力于通过代码创造有价值的解决方案。
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                除了技术，我也热爱分享和学习。通过这个博客，我希望能够记录自己的成长历程，
                分享技术见解，并与更多志同道合的朋友交流。
              </p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              技能专长
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  前端开发
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">React / Next.js</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">TypeScript</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Tailwind CSS</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  数据分析
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Python</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Pandas / NumPy</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">SQL</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              兴趣爱好
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl mb-2">💻</div>
                <span className="text-sm text-gray-600 dark:text-gray-300">编程</span>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl mb-2">📚</div>
                <span className="text-sm text-gray-600 dark:text-gray-300">阅读</span>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl mb-2">🎵</div>
                <span className="text-sm text-gray-600 dark:text-gray-300">音乐</span>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl mb-2">🏃</div>
                <span className="text-sm text-gray-600 dark:text-gray-300">运动</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 