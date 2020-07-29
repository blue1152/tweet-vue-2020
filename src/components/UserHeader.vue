<template>
  <nav id="UserHeader">
    <section id="upper-bar">
      <span>
        <router-link class="back-arrow" to="/">
          <img :src="arrowImg" alt="index" />
        </router-link>
      </span>
      <span class="user-name">
        <div>{{ currentUser.data[0].user.name }}</div>
        <div>{{ currentUser.data[0].tweetCounts }} 推文</div>
      </span>
    </section>

    <section id="user-info">
      <div class="cover-photo">
        <div class="user-photo-big">
          <img :src="profileImg" alt="profile" />
        </div>
      </div>
      <div align="right" class="btn-wrapper">
        <button type="button" class="setting-btn">編輯個人資料</button>
      </div>
      <div class="user-name">
        <div>{{ currentUser.data[0].user.name }}</div>
        <div>@{{ currentUser.data[0].account }}</div>
      </div>
      <div class="user-detail">{{ currentUser.data[0].introduction }} (這裡是introduction)</div>
      <div class="user-follow">
        <!-- 取其他路由的資料 -->
        <span>{{ followings }}個跟隨中</span>
        <!-- /api/users/:userId/followings -->
        <span>{{ followers }}位跟隨者</span>
        <!-- /api/users/:userId/followers -->
      </div>
    </section>
  </nav>
</template>
<script>
// test用, 之後刪除↓ //
// 路由 /api/users/:userId
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
    data: [
      {
        account: "postmanput",
        email: "postmanput@example.com",
        user: {
          id: 2,
          email: "postmanput@example.com",
          password:
            "$2a$10$9jHBKiNsZeUCIigor.Zxo.ZmZwm0Xt0174PJfw04J1R.AFRl7eUSW",
          name: "postmanput",
          avatar: null,
          introduction: null,
          role: "user",
          account: "postmanput",
          cover: null,
          createdAt: "2020-07-27T02:57:17.000Z",
          updatedAt: "2020-07-27T03:34:30.000Z",
          Tweets: [
            {
              id: 1,
              description:
                "Fugiat ut iusto sit non aspernatur magni voluptatibus adipisci veniam. Illo qui ea sequi maxime temporibus. Dolor aut ratione fugiat rerum quos autem corrupti maxime cumque. Omnis quo vitae impedit velit voluptatem possimus iste quia.\n \rAut modi quia error voluptatibus repellendus ut ratione recusandae. Ex consequatur labore enim magni cupiditate magni voluptatem. Facilis dolores enim eos ea excepturi. Nemo corrupti animi. Quo vel molestias ad omnis in quia accusamus culpa.\n \rAdipisci voluptas qui amet ab quidem architecto sint. Excepturi necessitatibus ab sit. Earum aliquam alias.",
              UserId: 2,
              createdAt: "2020-07-27T02:57:17.000Z",
              updatedAt: "2020-07-27T02:57:17.000Z",
            },
            {
              id: 6,
              description:
                "Vero enim est maxime. Qui neque quod vitae unde autem amet nulla quia et. Sapiente perspiciatis animi sit reprehenderit ut reprehenderit animi hic qui. Quod ipsam maiores itaque consequatur id ut inventore ut dolor. Et atque quo minus. Aut dolores perferendis aspernatur est aperiam maxime.",
              UserId: 2,
              createdAt: "2020-07-27T02:57:17.000Z",
              updatedAt: "2020-07-27T02:57:17.000Z",
            },
            {
              id: 11,
              description: "iste ullam et",
              UserId: 2,
              createdAt: "2020-07-27T02:57:17.000Z",
              updatedAt: "2020-07-27T02:57:17.000Z",
            },
            {
              id: 16,
              description: "natus",
              UserId: 2,
              createdAt: "2020-07-27T02:57:17.000Z",
              updatedAt: "2020-07-27T02:57:17.000Z",
            },
            {
              id: 21,
              description:
                "Nam sint iure maxime ullam quia beatae quia dolor. Ipsum et minima libero qui id et perspiciatis nesciunt. Exercitationem sapiente eos natus odit. Eius sunt sequi facere maxime provident odio eaque qui vel. Aut autem praesentium natus tenetur aperiam temporibus sunt accusamus quod. Culpa exercitationem quam.\n \rHarum ut unde cumque aut est quia voluptatem. Id sit aperiam. Quasi qui deserunt sunt quas. Provident ut repellat illo quia. Nemo quibusdam numquam voluptatem rerum molestiae. Eos consequuntur voluptas voluptas sit est et nisi et.\n \rQuas molestiae et qui maiores. Ab labore consequatur omnis omnis dicta et dolore non. Assumenda autem atque est sit consequatur quisquam excepturi quasi velit. Quam laborum omnis sint earum beatae.",
              UserId: 2,
              createdAt: "2020-07-27T02:57:17.000Z",
              updatedAt: "2020-07-27T02:57:17.000Z",
            },
            {
              id: 26,
              description:
                "Ut culpa ut alias quasi officia ut pariatur.\nFacilis omnis sapiente ut veniam quasi laborum quisquam.",
              UserId: 2,
              createdAt: "2020-07-27T02:57:17.000Z",
              updatedAt: "2020-07-27T02:57:17.000Z",
            },
            {
              id: 31,
              description:
                "Autem asperiores sed. Eius laboriosam numquam esse explicabo autem aut distinctio inventore ipsa. Labore magnam expedita similique. Illo omnis ut rerum. Distinctio vero neque.",
              UserId: 2,
              createdAt: "2020-07-27T02:57:17.000Z",
              updatedAt: "2020-07-27T02:57:17.000Z",
            },
            {
              id: 36,
              description:
                "Non itaque vel laudantium ut.\nNeque ut et nam atque et et incidunt est.\nOfficiis sed blanditiis labore.\nBlanditiis saepe repellendus velit aliquid saepe.",
              UserId: 2,
              createdAt: "2020-07-27T02:57:17.000Z",
              updatedAt: "2020-07-27T02:57:17.000Z",
            },
            {
              id: 41,
              description: "repellendus animi assumenda",
              UserId: 2,
              createdAt: "2020-07-27T02:57:17.000Z",
              updatedAt: "2020-07-27T02:57:17.000Z",
            },
            {
              id: 46,
              description: "officiis ea enim",
              UserId: 2,
              createdAt: "2020-07-27T02:57:17.000Z",
              updatedAt: "2020-07-27T02:57:17.000Z",
            },
            {
              id: 51,
              description: "postmantest",
              UserId: 2,
              createdAt: "2020-07-27T03:44:21.000Z",
              updatedAt: "2020-07-27T03:44:21.000Z",
            },
          ],
        },
        tweetCounts: 11,
      },
    ],
  },
  isAuthenticated: true,
};
// 路由 /api/users/:userId/followings
const followings = {
  data: [
  {
    "id": 3,
    "email": "user1@example.com",
    "password": "$2a$10$gf/fJqnGa/PykZ1.L7tKoelGMYPa5lYeqIYf7QJKivtwhOJrWA1u2",
    "name": "Gerda Tillman",
    "avatar": null,
    "introduction": null,
    "role": "user",
    "account": "user1",
    "cover": null,
    "createdAt": "2020-07-27T02:57:17.000Z",
    "updatedAt": "2020-07-27T02:57:17.000Z",
    "Followship": {
      "followerId": 2,
      "followingId": 3,
      "createdAt": "2020-07-27T02:57:17.000Z",
      "updatedAt": "2020-07-27T02:57:17.000Z"
    },
    "followingId": 3,
    "isFollowing": true
  },
  {
    "id": 4,
    "email": "user2@example.com",
    "password": "$2a$10$C6aCkCwfleC5Juol34WVruRiBOrfPQxFhENGUetcfA77RadulHiw6",
    "name": "Mariane Bergnaum",
    "avatar": null,
    "introduction": null,
    "role": "user",
    "account": "user2",
    "cover": null,
    "createdAt": "2020-07-27T02:57:17.000Z",
    "updatedAt": "2020-07-27T02:57:17.000Z",
    "Followship": {
      "followerId": 2,
      "followingId": 4,
      "createdAt": "2020-07-27T02:57:17.000Z",
      "updatedAt": "2020-07-27T02:57:17.000Z"
    },
    "followingId": 4,
    "isFollowing": true
  }
]
};
// 路由 /api/users/:userId/followers
const followers = {
  data: [
  {
    "id": 1,
    "email": "root@example.com",
    "password": "$2a$10$edPPNrsIgsw8BYcOOAVqeufUfiRbrDtbAE4FZEkZTSaPr9fGv6/BW",
    "name": "root",
    "avatar": null,
    "introduction": null,
    "role": "admin",
    "account": "root",
    "cover": null,
    "createdAt": "2020-07-27T02:57:17.000Z",
    "updatedAt": "2020-07-27T02:57:17.000Z",
    "Followship": {
      "followerId": 1,
      "followingId": 2,
      "createdAt": "2020-07-27T02:57:17.000Z",
      "updatedAt": "2020-07-27T02:57:17.000Z"
    },
    "followerId": 1,
    "isFollowing": false
  },
  {
    "id": 3,
    "email": "user1@example.com",
    "password": "$2a$10$gf/fJqnGa/PykZ1.L7tKoelGMYPa5lYeqIYf7QJKivtwhOJrWA1u2",
    "name": "Gerda Tillman",
    "avatar": null,
    "introduction": null,
    "role": "user",
    "account": "user1",
    "cover": null,
    "createdAt": "2020-07-27T02:57:17.000Z",
    "updatedAt": "2020-07-27T02:57:17.000Z",
    "Followship": {
      "followerId": 3,
      "followingId": 2,
      "createdAt": "2020-07-27T02:57:17.000Z",
      "updatedAt": "2020-07-27T02:57:17.000Z"
    },
    "followerId": 3,
    "isFollowing": true
  }
]
};
// test用, 之後刪除↑ //
export default {
  name: "UserHeader",
  data() {
    return {
      arrowImg: "./black_arrow.svg",
      profileImg: "./photo_big.svg",
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
      followings: '',
      followers: '',
    };
  },
  created() {
    this.fetchUser();
    this.dataFix();
  },
  methods: {
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      };
      this.isAuthenticated = dummyUser.isAuthenticated;
      console.log(this.currentUser.data[0]);
    },
    // test用, 之後刪除↓ TODO: 要改成用token取資料//
    // 模仿api取資料
    dataFix() {
      const followingsCount = Number(followings.data.length)
      const followersCount = Number(followers.data.length)
      this.followings = followingsCount
      this.followers = followersCount
    },
    // test用, 之後刪除↑ //
  },
};
</script>
<style lang="scss">
.user-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
// 變數設置
$orange: #ff6600;
$main-black: #000;
$text-black: #1c1c1c;
$grey: #9197a3;
$text-grey: #657786;
$background-grey: #f5f8fa;
$main-grey: #e6ecf0;
// 使用者資料
#upper-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 7px 19px;
}
.back-arrow {
  margin-right: 2.5rem;
}
.cover-photo {
  width: 100%;
  min-height: 200px;
  position: relative;
  background: url(/../cover.svg) no-repeat;
  object-fit: cover;
}
.user-photo-big {
  position: absolute;
  top: 124px;
  left: 14px;
}
.btn-wrapper {
  padding: 10px 15px;
}
.setting-btn {
  width: 122px;
  height: 40px;
  border: 1px solid $orange;
  color: $orange;
  border-radius: 100px;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 40px;
}
.user-name > div:nth-child(1) {
  font-style: normal;
  font-weight: 900;
  font-size: 19px;
  line-height: 28px;
  color: $text-black;
}
.user-name > div:nth-child(2) {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: $text-grey;
}
.user-follow > span {
  margin-right: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: $main-black;
}
</style>