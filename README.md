# A Little Site (Homework)
### 使用BootStrap3搭建的个人主页(纯静态)
#### 实现功能
- 整体分为顶部导航栏(Navi)，网页主体(Body)，底部栏(Footer)
- 顶部导航栏分为站名(A Little Site) ，导航(定位/跳转指定位置用，但会有偏移……)，友链（单向）
- 网页主体布置了：
    - 侧边栏(aside)，包括个人姓名，头像，个人项目
    - 个人介绍区块，随想（文章）区块
    - 联系表格区块（因为是静态网页，所以并不会真正联系，只会展示一个模态框）
- 底部栏包含links区块（但只放了GitHub）和图片来源（用模态框展示）
- 回到顶部按钮
#### 目前存在问题
- 定位/跳转问题：因为顶部导航栏是固定的，所以会有一个偏移。