# LUG @ ZJIC 网站

浙江交通职业技术学院 Linux 用户协会官方网站，基于 [Docusaurus 2](https://docusaurus.io/) 框架搭建。

本仓库内的所有文件均为源代码，所有推送至 master 分支的修改将会使用 Github Action 自动编译和部署。

## 本地搭建

1. 下载并安装 [Node.js](https://nodejs.org/en/download/) 16.14 及以上的软件，执行 `node -v` 以查看版本号。

2. 打开终端，并执行下列命令以安装此框架：

    ```powershell
    $ npx create-docusaurus ./LUG-ZJIC
    ```

3. 使用方向键，并按回车键选择 'Git repository'；接着再复制项目地址（**并非 git 地址**），选择 'Copy' 选项，项目将会自动克隆并下载依赖。

    ```powershell
    ✔ Select a template below... 
    › Git repository
    ✔ Enter a repository URL from GitHub, Bitbucket, GitLab, or any other public repo.
    (e.g: https://github.com/ownerName/repoName.git) … 
    › https://github.com/ZJVTIT/LUG-Website
    ✔ How should we clone this repo? 
    › Copy: do a shallow clone, but do not create a git repo
    ```

4. 最后执行如下指令，即可实时预览网页。

    ```powershell
    $ cd LUG-ZJIC
    $ npm start
    ```
    
## 添加/修改页面

> 注意：在做出必要的修改或添加之前，请先Fork此项目并克隆。执行 `git clone` 命令克隆修改或添加文件。

添加新页面（Docs / Activities / Discover）请分别在 `docs`，`blog/activities`，`blog/discover` 中参考 `_template.md` 文件。

设置文章作者请在 `blog/authors.yml` 中添加作者信息（参考已有内容），然后在页面中指定 `author: key`（可支持多个作者，示例：`author: [key1, key2, ...]` ）。
