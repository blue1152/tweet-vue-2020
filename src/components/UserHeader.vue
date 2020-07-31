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
        <button type="button" class="setting-btn" data-toggle="modal" data-target="#userEdit">編輯個人資料</button>
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
    <!-- Modal userEdit-->
<div class="modal fade" id="userEdit" tabindex="-1" role="dialog" aria-labelledby="userEditModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content user-edit-modal flex-column">
      <form>
        <div class="modal-header col-12 d-flex align-items-center">
          <div class="left-wrapper d-flex  align-items-center">
            <a href="" data-dismiss="modal" aria-label="Close"><img src="https://i.imgur.com/wO030c5.png"></a>
            <div class="user-modal-title">編輯個人資料</div>
          </div>
          <div class="right-wrapper">
            <button type="submit" class="post-btn">儲存</button>
          </div>
        </div>
        <div class="modal-body col-12 m-0 p-0" style="box-sizing: border-box;">
          <div class="cover-wrapper">
            <img :src="coverImg" alt="cover" class="cover-edit">
          </div>
          <div class="photo-wrapper">
            <img :src="profileImg" alt="profile" class="photo-edit rounded-circle">
          </div>
          <div class="d-flex flex-column input-wrapper mt-3 mb-5">
            <input type="text" name="text-name" class="text-name mx-auto" maxlength=50>
            <label for="text-name" class="text-name-label mx-auto">名稱</label>
            <small class="text-counter text-right mr-4">0/50</small>
          </div>
          <div class="d-flex flex-column input-wrapper mb-5">
            <input type="text" name="text-description" class="text-description mx-auto" maxlength=160>
            <label for="text-description" class="text-description-label mx-auto">自我介紹</label>
            <small class="text-counter text-right mr-4">0/160</small>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
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
// 路由 /api/users/:userId/followers
// test用, 之後刪除↑ //
import { Toast } from "./../utils/helpers";
import tweetAPI from './../apis/tweets';
export default {
  name: "UserHeader",
  data() {
    return {
      userData: {
        account: "",
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        introduction: "",
        avatar: "",
        cover: ""
      },
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
    handleSubmitUser() {
      if (!this.description) {
        Toast.fire({
          icon: "warning",
          title: "記得要寫東西再送出喔~",
        });
        return;
      }
      tweetAPI
        .updateUser({
          userId: localStorage.getItem("id"),
          account: this.userData.account,
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password,
          passwordConfirm: this.userData.passwordConfirm,
          introduction: this.userData.introduction,
          avatar: this.userData.avatar,
          cover: this.userData.cover,
        })
        .then((response) => {
          console.log("response", response);
          const data = response.data;
          //console.log(data);
          // 未成功
          if (data.status !== "success") {
            throw new Error(data.message);
          } else {
            // 成功
            const page = '';
            this.fetchTweets(page)
            this.description = "有什麼新鮮事？"; // 還原
          }
        })
        .catch((error) => {
          this.description = ""; // 清空
          // 顯示錯誤提示
          Toast.fire({
            icon: "warning",
            title: "字數過長",
          });
          console.log("error", error);
        }); 
    },
    fetchTweets() {
     tweetAPI
      .getMainContent()
      .then((response) => {
        console.log("response", response);
        const dataArray  = response.data;
        // 未成功
        if (response.status != "200" || response.data.length == 0) {
          throw new Error(response.statusText);
        } else {
        // 成功
        console.log(response.statusText)
        console.log(dataArray)
        this.data = dataArray
        }
      })
      .catch((error) => {
         console.log("error", error);
      }); 
    }
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