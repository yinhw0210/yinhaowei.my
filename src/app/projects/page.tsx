import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: '项目作品',
  description: '殷浩玮的个人项目作品展示，包括前端开发、数据分析和人工智能相关项目',
};

const projects = [
  {
    id: 'personal-blog',
    title: '个人博客网站',
    description: '使用 Next.js 15 和 TypeScript 构建的现代化个人博客，支持响应式设计、暗黑模式、SEO优化等特性。',
    image: '🌐',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: '前端开发',
    status: '已完成',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'data-dashboard',
    title: '数据可视化仪表盘',
    description: '基于 React 和 D3.js 开发的交互式数据可视化平台，支持多种图表类型和实时数据更新。',
    image: '📊',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    category: '数据分析',
    status: '进行中',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'ai-chatbot',
    title: 'AI 智能聊天机器人',
    description: '基于大语言模型的智能聊天机器人，具备上下文理解、多轮对话和知识问答能力。',
    image: '🤖',
    technologies: ['Python', 'Transformers', 'FastAPI', 'React'],
    category: '人工智能',
    status: '已完成',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'task-manager',
    title: '任务管理系统',
    description: '全栈任务管理应用，支持项目管理、团队协作、进度跟踪等功能，提供直观的用户界面。',
    image: '✅',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
    category: '全栈开发',
    status: '已完成',
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 'weather-app',
    title: '天气预报应用',
    description: '响应式天气预报应用，集成第三方天气API，支持地理定位、多城市管理和详细天气信息展示。',
    image: '🌤️',
    technologies: ['React', 'Weather API', 'CSS3', 'JavaScript'],
    category: '前端开发',
    status: '已完成',
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 'ml-classifier',
    title: '机器学习分类器',
    description: '使用 Python 和 scikit-learn 开发的机器学习分类模型，用于文本分类和情感分析。',
    image: '🧠',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'Jupyter'],
    category: '机器学习',
    status: '已完成',
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

const categories = ['全部', '前端开发', '全栈开发', '数据分析', '人工智能', '机器学习'];

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          项目作品
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          展示我的技术实践和创新项目
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          精选项目
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-8">
                {/* Project Icon and Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === '已完成'
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title and Category */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    技术栈
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Link
                    href={project.demoUrl}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                    在线预览
                  </Link>
                  <Link
                    href={project.githubUrl}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <CodeBracketIcon className="w-4 h-4 mr-2" />
                    查看代码
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === '全部'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          其他项目
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
            >
              {/* Project Icon and Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{project.image}</div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === '已完成'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Title and Category */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs mb-3">
                {project.category}
              </span>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-2">
                <Link
                  href={project.demoUrl}
                  className="flex-1 text-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
                >
                  预览
                </Link>
                <Link
                  href={project.githubUrl}
                  className="flex-1 text-center px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  代码
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 