# 基于 ASTRO 的企业官网模板

> 该项目基于某公司定制，图片资源皆为本地资源，若您需要使用，请按自身需要修改。

此项目基于某公司官网，使用React组件和Astro文件混合开发，并进行了一些优化。

模板含企公司首页，公司业务，合作和介绍等页面，并且分移动端和 PC 端，响应式设计友好。

基于 ASTRO 的 SSG，SEO 友好。超低延迟。

## lighthouse 测试结果：

> 注意：此 demo 网站没有使用 https，因此影响了最佳做法分数，但整体性能和 SEO 是非常高的。

- PC
  ![PC端](img.png)

## 运行要求

- `node > 18.16.0`

```bash
# 安装依赖
npm install

# 开发环境运行
npm run dev

# 生产环境构建
npm run build

# 生产环境运行
npm run preview
```

## 技术栈

- **Astro**: 现代静态站点生成器，支持多框架组件集成
- **TailwindCSS**: 实用优先的CSS框架，快速构建响应式UI
- **React**: 用于构建可复用UI组件
- **TypeScript**: 提供类型安全支持
- **ESLint/Prettier**: 代码风格检查和格式化
- **Stylelint**: CSS样式检查

## 项目结构

```
.
├── public/               # 静态资源
│   ├── images/           # 图片资源
│   └── favicon.ico       # 网站图标
├── src/
│   ├── components/       # 组件目录
│   │   ├── About/        # 关于我们模块
│   │   ├── Business/     # 公司业务模块
│   │   ├── Footer/       # 底部模块
│   │   ├── Home/         # 首页模块
│   │   ├── Join/         # 加入我们模块
│   │   └── Navbar/       # 导航模块
│   ├── data/             # 数据文件
│   ├── json/             # JSON数据
│   ├── layouts/          # 布局组件
│   ├── pages/            # 页面文件
│   ├── styles/           # 全局样式
│   └── utils/            # 工具函数
├── .eslintrc.cjs         # ESLint配置
├── .stylelintrc.json     # Stylelint配置
├── astro.config.mjs      # Astro配置
├── tailwind.config.mjs   # Tailwind配置
└── tsconfig.json         # TypeScript配置
```

## 脚本说明

```bash
# 安装依赖
npm install

# 开发环境运行
npm run dev

# 生产环境构建
npm run build

# 生产环境预览
npm run preview

# 代码规范检查
npm run lint:eslint       # JavaScript/TypeScript检查
npm run lint:prettier     # 代码格式化
npm run lint:stylelint   # CSS样式检查

# 版本管理
npm run release          # 版本发布

# Git提交
npm run commit           # 规范提交
```

## 部署

运行 `npm run build` 后，将生成的 `dist` 目录下的文件部署到服务器即可。
