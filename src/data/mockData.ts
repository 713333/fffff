// 模拟项目数据
export const projects = [
  {
    id: '1',
    name: '个人待办事项管理器',
    description: '命令行或GUI界面的任务管理工具',
    tags: ['Python', 'Tkinter', '文件操作'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Todo%20list%20application%20interface%20with%20tasks%20and%20checkboxes&image_size=square_hd',
    link: '/projects/1',
    github: 'https://github.com/username/todo-manager',
    details: '这是一个使用Python和Tkinter开发的待办事项管理工具，支持任务的添加、删除、标记完成和优先级设置。项目使用文件存储任务数据，确保数据持久化。',
    codeSnippets: [
      `def add_task(task_name, priority):
    tasks.append({"name": task_name, "priority": priority, "completed": False})
    save_tasks()
    update_task_list()`
    ]
  },
  {
    id: '2',
    name: '天气查询应用',
    description: '根据城市名称获取实时天气信息',
    tags: ['Python', 'Requests', 'API调用'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Weather%20app%20interface%20showing%20temperature%20and%20forecast&image_size=square_hd',
    link: '/projects/2',
    github: 'https://github.com/username/weather-app',
    details: '这个应用使用Python的requests库调用天气API，根据用户输入的城市名称获取实时天气信息，并以友好的方式展示给用户。',
    codeSnippets: [
      `def get_weather(city):
    url = f"https://api.weatherapi.com/v1/current.json?key={API_KEY}&q={city}"
    response = requests.get(url)
    data = response.json()
    return data`
    ]
  },
  {
    id: '3',
    name: '文本文件分析工具',
    description: '统计文本文件的词频、行数等信息',
    tags: ['Python', '正则表达式', '文件操作'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Text%20analysis%20tool%20with%20word%20frequency%20chart&image_size=square_hd',
    link: '/projects/3',
    github: 'https://github.com/username/text-analyzer',
    details: '这个工具可以分析文本文件，统计词频、行数、字符数等信息，并生成可视化报告。',
    codeSnippets: [
      `def analyze_text(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        text = f.read()
    words = re.findall(r'\b\w+\b', text.lower())
    word_freq = Counter(words)
    return {'word_count': len(words), 'line_count': len(text.splitlines()), 'most_common': word_freq.most_common(10)}`
    ]
  },
  {
    id: '4',
    name: '网络爬虫',
    description: '爬取指定网站的内容并保存',
    tags: ['Python', 'BeautifulSoup', 'Requests'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Web%20crawler%20scraping%20website%20data&image_size=square_hd',
    link: '/projects/4',
    github: 'https://github.com/username/web-crawler',
    details: '这个网络爬虫使用Python的BeautifulSoup和requests库，爬取指定网站的内容并保存到本地文件。',
    codeSnippets: [
      `def crawl_website(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    articles = soup.find_all('article')
    data = []
    for article in articles:
        title = article.find('h2').text
        content = article.find('p').text
        data.append({'title': title, 'content': content})
    return data`
    ]
  },
  {
    id: '5',
    name: '数据可视化工具',
    description: '将CSV数据转换为图表',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20tool%20with%20charts%20and%20graphs&image_size=square_hd',
    link: '/projects/5',
    github: 'https://github.com/username/data-visualizer',
    details: '这个工具使用Pandas读取CSV数据，然后使用Matplotlib生成各种图表，如折线图、柱状图和饼图。',
    codeSnippets: [
      `def visualize_data(csv_path):
    df = pd.read_csv(csv_path)
    plt.figure(figsize=(10, 6))
    plt.plot(df['date'], df['value'])
    plt.title('Data Trend')
    plt.xlabel('Date')
    plt.ylabel('Value')
    plt.savefig('output.png')`
    ]
  }
];

// 模拟技能数据
export const skills = [
  {
    name: 'Python',
    level: 90,
    category: '编程语言',
    icon: 'python'
  },
  {
    name: 'JavaScript',
    level: 75,
    category: '编程语言',
    icon: 'javascript'
  },
  {
    name: 'React',
    level: 80,
    category: '前端框架',
    icon: 'react'
  },
  {
    name: 'HTML/CSS',
    level: 85,
    category: '前端技术',
    icon: 'html5'
  },
  {
    name: 'SQL',
    level: 70,
    category: '数据库',
    icon: 'database'
  },
  {
    name: 'Git',
    level: 85,
    category: '版本控制',
    icon: 'git'
  },
  {
    name: 'Docker',
    level: 60,
    category: 'DevOps',
    icon: 'docker'
  },
  {
    name: 'Linux',
    level: 75,
    category: '操作系统',
    icon: 'linux'
  }
];

// 模拟博客文章数据
export const blogPosts = [
  {
    id: '1',
    title: 'Python装饰器的深入理解',
    date: '2024-01-15',
    summary: '本文深入探讨了Python装饰器的工作原理和应用场景，通过实例讲解如何创建和使用装饰器。',
    content: `# Python装饰器的深入理解

装饰器是Python中一种强大的编程工具，它允许我们在不修改原函数代码的情况下增强函数的功能。

## 装饰器的基本原理

装饰器本质上是一个函数，它接受一个函数作为参数，并返回一个新的函数。

python
def decorator(func):
    def wrapper(*args, **kwargs):
        # 在调用原函数前执行的代码
        result = func(*args, **kwargs)
        # 在调用原函数后执行的代码
        return result
    return wrapper


## 装饰器的应用场景

1. 日志记录
2. 性能测试
3. 权限验证
4. 缓存

## 实例演示

python
@decorator
def hello():
    print("Hello, world!")


通过使用@语法糖，我们可以更简洁地应用装饰器。
`,
    tags: ['Python', '装饰器', '高级特性']
  },
  {
    id: '2',
    title: '使用Pandas进行数据处理',
    date: '2024-02-20',
    summary: '本文介绍了Pandas库的基本使用方法，包括数据读取、清洗、转换和分析。',
    content: `# 使用Pandas进行数据处理

Pandas是Python中用于数据处理和分析的强大库，它提供了DataFrame数据结构，使得数据处理变得更加简单和高效。

## 基本操作

### 读取数据

python
import pandas as pd

# 从CSV文件读取数据
df = pd.read_csv('data.csv')

# 从Excel文件读取数据
df = pd.read_excel('data.xlsx')


### 数据清洗

python
# 处理缺失值
df = df.dropna()  # 删除包含缺失值的行

# 处理重复值
df = df.drop_duplicates()


### 数据转换

python
# 列重命名
df = df.rename(columns={'old_name': 'new_name'})

# 数据类型转换
df['column'] = df['column'].astype(int)


## 数据分析

python
# 基本统计
df.describe()

# 分组统计
df.groupby('column').mean()

`,
    tags: ['Python', 'Pandas', '数据处理']
  },
  {
    id: '3',
    title: 'React Hooks入门指南',
    date: '2024-03-10',
    summary: '本文介绍了React Hooks的基本概念和使用方法，包括useState、useEffect等常用Hooks。',
    content: `# React Hooks入门指南

React Hooks是React 16.8引入的新特性，它允许我们在函数组件中使用状态和其他React特性。

## 常用Hooks

### useState

jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


### useEffect

jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 副作用代码
    document.title = You clicked {count} times;

    // 清理函数
    return () => {
      // 清理代码
    };
  }, [count]); // 依赖数组

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


## 自定义Hooks

我们可以创建自定义Hooks来复用逻辑：

jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

`,
    tags: ['React', 'Hooks', '前端']
  }
];

// 个人信息数据
export const personalInfo = {
  name: '张三',
  title: 'Python全栈开发者',
  bio: '热爱编程，专注于Python和前端技术，喜欢构建实用的工具和应用。',
  email: 'zhangsan@example.com',
  github: 'https://github.com/zhangsan',
  linkedin: 'https://linkedin.com/in/zhangsan',
  twitter: 'https://twitter.com/zhangsan',
  avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20developer%20portrait%20avatar&image_size=square_hd'
};

// 教育和工作经历数据
export const experiences = [
  {
    type: 'education',
    title: '计算机科学学士',
    institution: '某某大学',
    period: '2018-2022',
    description: '主修计算机科学，学习了数据结构、算法、操作系统等课程。'
  },
  {
    type: 'work',
    title: 'Python开发工程师',
    institution: '某某科技公司',
    period: '2022-至今',
    description: '负责后端服务开发，使用Python和Django框架构建API。'
  }
];
