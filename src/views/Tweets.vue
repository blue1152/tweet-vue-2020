<template>
  <div id="tweets">
    <div id="leftbar">
      <UserLeftbar />
    </div>
    <div class="container py-5">
      <h1 class="mt-5">
      user header
      </h1>
      <hr>
      <div class="row user-tabs">
        <div class="col-md-4" @click="showComments ()">
          推文
        </div>
        <div class="col-md-4">
          推文與回覆
        </div>
        <div class="col-md-4">
          喜歡的內容
        </div>
      </div>
      <UserPost :comments="comments" />
      <UserReply />
      <UserLikes />
    </div>
    <div id="rightbar">
      <FollowingBar />
    </div>
  </div>
</template>
<script>
import UserLeftbar from '../components/UserLeftbar'
import FollowingBar from '../components/FollowingBar'
import UserPost from '../components/UserPost'
import UserReply from '../components/UserReply'
import UserLikes from '../components/UserLikes'
// 假資料
const dummyData = {
  "user": {
    "id": 1,
    "email": "root@example.com",
    "password": "12345678",
    "name": "root",
    "avatar": "https://i.imgur.com/v7kFARi.jpg",
    "introduction": "admin test",
    "role": "admin",
    "account": "@root",
    "cover": "https://i.imgur.com/v7kFARi.jpg",
    "createdAt": "2020-07-22T16:41:32.000Z",
    "updatedAt": "2020-07-22T16:41:32.000Z",
    "Tweets": [
      {
        "id": 1,
        "description": "root tweets",
        "UserId": 1,
        "createdAt": "2020-07-22T16:41:32.000Z",
        "updatedAt": "2020-07-22T16:41:32.000Z",
        "Likes": [
          {
            "id": 1,
            "UserId": 1,
            "TweetId": 1,
            "createdAt": "2020-07-22T16:41:32.000Z",
            "updatedAt": "2020-07-22T16:41:32.000Z"
          },
          {
            "id": 3,
            "UserId": 2,
            "TweetId": 1,
            "createdAt": "2020-07-22T16:41:32.000Z",
            "updatedAt": "2020-07-22T16:41:32.000Z"
          }
        ],
        "Replies": [
          {
            "id": 1,
            "comment": "root reply",
            "UserId": 1,
            "TweetId": 1,
            "createdAt": "2020-07-22T16:41:32.000Z",
            "updatedAt": "2020-07-22T16:41:32.000Z"
          }
        ]
      },
      {
        "id": 2,
        "description": "root tweets",
        "UserId": 1,
        "createdAt": "2020-07-22T16:41:32.000Z",
        "updatedAt": "2020-07-22T16:41:32.000Z",
        "Likes": [
          {
            "id": 2,
            "UserId": 1,
            "TweetId": 2,
            "createdAt": "2020-07-22T16:41:32.000Z",
            "updatedAt": "2020-07-22T16:41:32.000Z"
          }
        ],
        "Replies": []
      }
    ],
    "Replies": [
      {
        "id": 1,
        "comment": "root reply",
        "UserId": 1,
        "TweetId": 1,
        "createdAt": "2020-07-22T16:41:32.000Z",
        "updatedAt": "2020-07-22T16:41:32.000Z",
        "Tweet": {
          "id": 1,
          "description": "root tweets",
          "UserId": 1,
          "createdAt": "2020-07-22T16:41:32.000Z",
          "updatedAt": "2020-07-22T16:41:32.000Z"
        }
      }
    ],
    "Likes": [
      {
        "id": 1,
        "UserId": 1,
        "TweetId": 1,
        "createdAt": "2020-07-22T16:41:32.000Z",
        "updatedAt": "2020-07-22T16:41:32.000Z",
        "Tweet": {
          "id": 1,
          "description": "root tweets",
          "UserId": 1,
          "createdAt": "2020-07-22T16:41:32.000Z",
          "updatedAt": "2020-07-22T16:41:32.000Z"
        }
      },
      {
        "id": 2,
        "UserId": 1,
        "TweetId": 2,
        "createdAt": "2020-07-22T16:41:32.000Z",
        "updatedAt": "2020-07-22T16:41:32.000Z",
        "Tweet": {
          "id": 2,
          "description": "root tweets",
          "UserId": 1,
          "createdAt": "2020-07-22T16:41:32.000Z",
          "updatedAt": "2020-07-22T16:41:32.000Z"
        }
      },
      {
        "id": 4,
        "UserId": 1,
        "TweetId": 3,
        "createdAt": "2020-07-22T16:41:32.000Z",
        "updatedAt": "2020-07-22T16:41:32.000Z",
        "Tweet": {
          "id": 3,
          "description": "user tweets",
          "UserId": 2,
          "createdAt": "2020-07-22T16:41:32.000Z",
          "updatedAt": "2020-07-22T16:41:32.000Z"
        }
      }
    ]
  },
  "tweetCounts": 2
}

export default {
  name: "tweets",
  components: {
    UserLeftbar,
    FollowingBar,
    UserPost,
    UserReply,
    UserLikes,
  },
  data () {
    return {
      comments: [],
      reply: [],
      likes: [],
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      const vm = this
      vm.comments = dummyData.user.Tweets
      vm.reply = dummyData.user.Replies
      vm.likes = dummyData.user.Likes
    },
    showComments () {
      return 
    }
  }
};
</script>
<style lang="scss">
// 版面配置
#tweets {
  display: grid;
  grid-template-columns: 378px 600px 1fr;
  width: 100%;
  grid-gap: 1.5rem;
}
#leftbar, #rightbar {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.user-tabs {

}
</style>