<template>
  <div class="container">
    <header>
      <div class="header">
        <img class="header__img" src="https://randomuser.me/api/portraits/men/86.jpg" alt="">
        <div class="header__info">
          <span class="header__name">
            Константин Константинопольский
          </span>
          <span class="header__description">
            Менеджер по продажам
          </span>
          <div class="header__bubble bubble">
            Я подберу для вас самые лучшие предложения.<br>Мои услуги асболютно бесплатны
          </div>

          <div class="service-table">
            <div class="service-table__header">
              <div></div>
              <div>Услуг</div>
            </div>
            <div class="service-table__row">
              <div>
                <div class="stats">
                  Ручное бронирование
                  <span class="stats__bar stats__bar_green" style="width:80%;"></span>
                </div>
              </div>
              <div>
                11
              </div>
            </div>
            <div class="service-table__row">
              <div>
                <div class="stats">
                  <span class="stats__bar stats__bar_blue" style="width:30%"></span>
                  Пакетные туры
                </div>
              </div>
              <div>
                3
              </div>
            </div>
             <div class="service-table__row">
              <div>
                <div class="stats">
                  Отели
                  <span class="stats__bar stats__bar_blue" style="width:10%"></span>
                </div>
              </div>
              <div>
                1
              </div>
            </div>
            <div class="service-table__footer">
              <div>Всего</div>
              <div>15</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="reviews">
        <div class="reviews__header">
          <div class="reviews__left">
            <span class="reviews__title">
              Последние отзывы
            </span>
            <a href="/">Все отзывы</a>
          </div>
          <div class="reviews__icons">
            <div class="likes">
              <div class="heart icon"></div>
              <span class="likes__count">131</span>
            </div>
            <div class="comments">
              <div class="chat icon"></div>
              <span class="comments__count">14</span>
            </div>
          </div>
        </div>

        <post v-for="comment in comments" :post="comment"></post>

      </div>

      <div class="write-comment">
        <textarea class="write-comment__textarea" name="" id="" rows="5" v-model="comment" v-on:keydown="handleCmdEnter($event)" required></textarea>
        <input class="write-comment__button" type="button" value="Написать консультанту" @click="postComment">
      </div>
    </main>
  </div>
</template>


<script lang="babel">
import moment from 'moment'
import Post from './components/Post/Post'

moment.locale('ru')

export default {
  name: 'app',
  components: {
    Post
  },
  data: () => ({
    comments: [{
      name: 'Маяковский',
      date: moment({y: 2011, M: 3, d: 5}),
      text: 'Вам ли, любящим баб да блюда, жизнь отдавать в угоду?'
    }, {
      name: 'Бродский',
      date: moment({y: 2016, M: 4, d: 20}),
      text: 'Здесь снится вам не женщина в трико, а собственный ваш адрес на конверте. Здесь утром, видя скисшим молоко, молочник узнает о вашей смерти.'
    }, {
      name: 'Перминов',
      date: moment({y: 2017, M: 6, d: 15}),
      text: 'Осень - эпилепсия цвета. На часах плесень.'
    }],
    comment: ''
  }),
  computed: {
    now: function () {
      return moment()
    }
  },
  methods: {
    handleCmdEnter: function (e) {
      if ((e.metaKey || e.ctrlKey) && e.keyCode === 13) {
        this.postComment()
      }
    },
    postComment: function () {
      if (this.comment.length > 0) {
        this.comments.push({
          text: this.comment,
          name: 'Вася',
          date: this.now
        })
        this.comment = ''
      }
    }
  }
}
</script>



<style media="screen" lang="scss">
@import "global";
@import "icons";

$color-lightyellow: #fffbc8;
$color-blue: #ace2f8;
$color-green: #b1e19b;
$color-yellow: #fdd639;

.header {
  display: flex;
  align-items: flex-start;
  padding: 0 24px;
  margin-bottom: 40px;
  max-width: 720px;
  min-width: 360px;
  margin: 24px auto 32px;
  &__info {
    flex: auto;
  }
  &__img {
    position: relative;
    z-index: 2;
    min-width: 180px;
    height: 180px;
    border-radius: 50%;
    margin-right: 24px;
    margin-bottom: 4px;
  }
  &__name {
    display: block;
    font-size: 20px;
    margin-bottom: 4px;
    font-weight: 600;
  }
  &__description {
    display: block;
    font-size: 15px;
    color: #808080;
    margin-bottom: 8px;
  }
  &__bubble {
    margin-bottom: 32px;
  }
}

.bubble {
  display: inline-block;
  background: $color-lightyellow;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.25);
  border-radius: 8px;
  padding: 16px 16px 16px 150px;
  margin-left: -150px;
  line-height: 1.4;
}

.service-table {
  &__row, &__header, &__footer {
    display: flex;
    justify-content: space-between;
  }
  &__row {
    box-shadow: inset 1px 0 0 0 rgba(0,0,0,0.5);
    & > :first-child{
      flex: auto;
      margin-right: 24px;
    }
    & > :last-child{
      font-weight: 600;
    }
    &:not(:nth-last-child(2)) {
      padding-bottom: 4px;
    }
  }

  &__header {
    padding-bottom: 16px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 16px;
  }
  &__footer {
    padding-top: 16px;
    border-top: 1px solid #ccc;
    margin-top: 16px;
    font-size: 20px;
    font-weight: 600;
  }
}


.stats {
  display: block;
  position: relative;
  padding:8px;
  &__bar {
    display: block;
    position: absolute;
    z-index: -2;
    top: 0;
    bottom:0;
    left: 0;
    border-radius:0 4px 4px 0;
    background: #eee;

    &_blue {
      background: $color-blue;
    }
    &_green {
      background: $color-green;
    }
  }
}


.reviews {
  max-width: 720px;
  min-width: 360px;
  padding: 0 24px;
  margin: 0 auto;
  &__left {
    display: flex;
    align-items: center;
  }
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  &__title {
    font-size: 24px;
    font-weight: 600;
    margin-right: 16px;
  }
  &__icons {
    display: flex;
    align-items: center;
    margin-left: auto;
    & > :first-child {
      margin-right: 8px;
    }
  }
}


.likes {
  display: flex;
  align-items: center;
}
.comments {
  display: flex;
  align-items: center;
}
.likes__count,
.comments__count{
  margin-left: 6px;
}


.write-comment {
  max-width: 720px;
  min-width: 360px;
  margin: 0 auto;
  padding: 32px 24px;
  background: #f2f2f2;
  text-align: center;

  &__textarea {
    outline: 0;
    margin-bottom: 16px;
    width:100%;
    border:1px solid rgba(0,0,0,0.35);
    background: #fff;
    border-radius: 3px;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.3);
    padding: 8px;
    font-size: 16px;
    transition: 0.2s;
    &:focus {
      border:1px solid rgba(0,0,0,0.6);
      box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.5);
    }
  }

  &__button {
    outline: 0;
    padding: 12px 40px;
    background: $color-yellow;
    border: 0;
    border-radius: 100px;
    font-size: 18px;
    font-weight: 600;
    transition: 0.2;
    &:hover {
      box-shadow: inset 0 0 0 100px rgba(0,0,0,0.05);
    }
    &:active {
      color: #000;
      box-shadow: inset 0 0 0 100px rgba(0,0,0,0.1);
    }
  }
}

@media screen and (max-width: 480px) {
  .header {
    align-items: flex-start;
    flex-direction: column;
    &__img {
      min-width: 80px;
      height: 80px;
    }
  }
  .bubble {
    margin-left: 0;
    padding: 8px 16px;
  }
  .reviews {
    &__header {
      align-items: flex-start;
    }
    &__left {
      flex-direction: column;
      align-items: flex-start;
      margin-top: -6px;
    }
  }
}
</style>
