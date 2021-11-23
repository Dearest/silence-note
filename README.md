# slience note
# 前言

本项目创建的主要目的是为了学习前端技能，在产品上复刻了[flomo](https://flomoapp.com/) 。flomo是一款优秀的笔记工具，我自己也是早期用户，谨以此表达尊重和谢意。

在数据存储的思想上借鉴了[简悦](https://simpread.pro/pro.html)，不会要求用户注册，也不会保存用户的笔记数据，给用户提供一个唯一UID，且只会保存与UID一一对应的保证产品正常运行的数据。

主要目的是为了学习，所以本项目并不是一个完整的产品，着重在对前端较新技术的运用，因此开发的功能都为技术服务，在github projects页面有本项目的开发记录和任务拆分。同时也有Notion pages来记录开发的过程和心得体会，以及技术分享。

本项目仅供学习交流，禁止用于任何商业行为。

# 产品规划

1. 简单的输入框来创建笔记，避免过多的排版。
2. 记录memos数据，像Github contributions看板一样，用小方块颜色区分memos数量。
3. 笔记以标签分类，且支持标签的不提供文件夹，避免陷入分类的繁杂。
4. 笔记内容以文件形式保存在本地，且可以通过坚果云和dropbox同步。
5. 一期规划里只做Web端。

# 技术选型

在技术选型上为了避免开发过程中全是新技术带来的挫败感，选用了自己相对比较熟悉的技术，但依然是自己第一次一个人完整开发，依然有可以学习的地方。

**前端：**

- SSR: [`Next.js`](https://nextjs.org/)
- JavaScript library: `React`
- UI library: [`material ui`](https://mui.com/zh/)
- API: [`Apollo`](https://www.apollographql.com/)

**后端:**

- Language: `Ruby`
- Framework: `Rails`
- Database: [`PostgreSQL`](https://www.postgresql.org/)
