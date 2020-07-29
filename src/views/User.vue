<template>
  <div id="user">
    <div id="leftbar">
      <UserLeftbar />
    </div>
    <div class="container">
      <div>
        <UserHeader :account="account" />
      </div>
      <hr />
      <div id="user-tabs">
        <div class="user-tabs-link">
          <router-link
            to="/restaurants"
            class="tab-links"
          >
        推文
          </router-link>
        </div>
        <div class="user-tabs-link">
          <router-link
            to="/restaurants"
            class="tab-links"
          >
          推文與回覆
          </router-link>
        </div>
        <div class="user-tabs-link">
          <router-link
            to="/restaurants"
            class="tab-links"
          >
          喜歡的內容
          </router-link>
        </div>
      </div>
      <UserPost :account="account" />
      <UserReply :reply="reply" />
      <UserLikes />
    </div>
    <div id="rightbar">
      <FollowingBar />
    </div>
  </div>
</template>
<script>
import UserLeftbar from "../components/UserLeftbar";
import UserHeader from "../components/UserHeader";
import FollowingBar from "../components/FollowingBar";
import UserPost from "../components/UserPost";
import UserReply from "../components/UserReply";
import UserLikes from "../components/UserLikes";
// 假資料
// 使用者自己的推文 /users/:userId/tweets
const dummyData = {
  account: "user0",
  email: "user0@example.com",
  user: {
    id: 2,
    email: "user0@example.com",
    password: "$2a$10$1BMUmoF.iUlgKL/xs9lliuGpER7/aycPmCfBxZFM.cpQ7/2xr9sXm",
    name: "Pearl Donnelly",
    avatar: null,
    introduction: null,
    role: "user",
    account: "user0",
    cover: null,
    createdAt: "2020-07-25T15:58:03.000Z",
    updatedAt: "2020-07-25T15:58:03.000Z",
    Tweets: [
      {
        id: 1,
        description:
          "Non aut voluptatem eaque ea soluta corporis doloremque eaque dolor. Itaque cum sint sit.",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
      {
        id: 6,
        description:
          "Animi quo at impedit ipsum.\nAssumenda eligendi consequatur quia voluptate nihil sapiente quis necessitatibus.",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
      {
        id: 11,
        description:
          "A dolorem veniam tempora quod natus. Dolore tenetur illum blanditiis. Velit quidem vel occaecati exercitationem molestiae tempore. Autem enim quia eum est ad. Assumenda nulla earum qui quia porro.",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
      {
        id: 16,
        description:
          "Omnis consequatur facere ea est.\nEligendi odio dolorem vel fuga neque non molestiae dolor.\nOfficiis quam expedita et sed.\nAccusantium est rerum fuga quo dolor aut accusamus velit.",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
      {
        id: 21,
        description: "vel enim nihil",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
      {
        id: 26,
        description: "Ea dolores esse repellat.",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
      {
        id: 31,
        description:
          "Modi nesciunt enim soluta veniam exercitationem dolor illo.",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
      {
        id: 36,
        description:
          "Vitae dolorem fugit dolore pariatur tempore quibusdam doloribus et.",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
      {
        id: 41,
        description:
          "Voluptatem est labore non maxime id dolor et dolor. Eveniet eum distinctio totam necessitatibus cupiditate nihil voluptas ad aut. Non doloremque hic qui nesciunt alias deserunt.",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
      {
        id: 46,
        description:
          "Rerum aperiam velit maxime reprehenderit saepe est in eius odio.",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
    ],
  },
  tweetCounts: 10,
};
// 使用者回覆過的貼文 /users/:userId/replied-tweets
const replies = {
  reply: [
    {
      id: 1,
      comment: "Ipsum incidunt aut non.",
      UserId: 2,
      TweetId: 1,
      createdAt: "2020-07-25T15:58:03.000Z",
      updatedAt: "2020-07-25T15:58:03.000Z",
      Tweet: {
        id: 1,
        description:
          "Non aut voluptatem eaque ea soluta corporis doloremque eaque dolor. Itaque cum sint sit.",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
    },
    {
      id: 6,
      comment: "in autem non",
      UserId: 2,
      TweetId: 6,
      createdAt: "2020-07-25T15:58:03.000Z",
      updatedAt: "2020-07-25T15:58:03.000Z",
      Tweet: {
        id: 6,
        description:
          "Animi quo at impedit ipsum.\nAssumenda eligendi consequatur quia voluptate nihil sapiente quis necessitatibus.",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
    },
    {
      id: 11,
      comment: "Voluptas sit amet nulla omnis in nihil aut libero id.",
      UserId: 2,
      TweetId: 11,
      createdAt: "2020-07-25T15:58:03.000Z",
      updatedAt: "2020-07-25T15:58:03.000Z",
      Tweet: {
        id: 11,
        description:
          "A dolorem veniam tempora quod natus. Dolore tenetur illum blanditiis. Velit quidem vel occaecati exercitationem molestiae tempore. Autem enim quia eum est ad. Assumenda nulla earum qui quia porro.",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
    },
    {
      id: 16,
      comment:
        "Omnis commodi ea optio enim similique et dolorum. Soluta et ipsam. Sequi sed fuga. Dolores quia quos dolorem quam saepe et laudantium. Amet sapiente saepe at voluptas ratione perferendis. Minus molestiae repellat non unde expedita iusto eligendi aspernatur neque.\n \rUnde consequatur sed est voluptate iste maxime consequatur repellendus. Ullam unde error. Ratione ullam facere delectus debitis minima. Atque in mollitia. Maiores consequatur dicta itaque. Numquam quaerat deleniti.\n \rAperiam corporis et dolorem optio amet deserunt ad quod. Numquam qui similique non aut dolorem. Molestiae in quidem voluptas qui unde excepturi dolorum nesciunt et. Laudantium eveniet ab. Alias est quia. Tenetur officiis dolore neque praesentium velit culpa et.",
      UserId: 2,
      TweetId: 16,
      createdAt: "2020-07-25T15:58:03.000Z",
      updatedAt: "2020-07-25T15:58:03.000Z",
      Tweet: {
        id: 16,
        description:
          "Omnis consequatur facere ea est.\nEligendi odio dolorem vel fuga neque non molestiae dolor.\nOfficiis quam expedita et sed.\nAccusantium est rerum fuga quo dolor aut accusamus velit.",
        UserId: 2,
        createdAt: "2020-07-25T15:58:03.000Z",
        updatedAt: "2020-07-25T15:58:03.000Z",
      },
    },
  ],
};
// 使用者按讚的貼文 /users/:userId/likes

export default {
  name: "user",
  components: {
    UserLeftbar,
    FollowingBar,
    UserHeader,
    UserPost,
    UserReply,
    UserLikes,
  },
  data() {
    return {
      account: [],
      reply: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  mounted() {},
  methods: {
    fetchFeeds() {
      const vm = this;
      vm.account = dummyData;
      vm.reply = replies.reply;
    },
  },
};
</script>
<style lang="scss">
// 版面配置
$orange: #ff6600;
$main-black: #000;
$text-black: #1c1c1c;
$grey: #9197a3;
$text-grey: #657786;
$background-grey: #f5f8fa;
$main-grey: #e6ecf0;
#user {
  display: grid;
  grid-template-columns: 378px 600px 1fr;
  width: 100%;
  grid-gap: 1.5rem;
}
#leftbar,
#rightbar {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#user-tabs {
  display: flex;
  flex-wrap: wrap;
}
.user-tabs-link {
  padding: 5px 10px 5px 0;
}
.tab-links {
  color: #333;
}
.tab-links:hover {
  color: $orange;
}
</style>