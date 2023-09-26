<template>
  <div class="panel">
    <div class="messages" ref="messagesRef">
      <div class="inner">
        <div
          :key="index"
          v-for="(message, index) in messages"
          :class="'message ' +message.uid"
        >
          <div class="user-image">
            <img :style="setFloat(message.uid)" :src="getProfileImage(message.uid)" alt="Profile Image" />
          </div>
          <div class="message-content">
            <div class="text" v-html="message.text"></div>
          </div>
        </div>
      </div>
    </div>

    <form @submit.prevent="sendMessage">
      <input v-model="text" />
      <button class="send-button" @click="sendMessage">
  <i class="fas fa-paper-plane"></i>
</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
import { useChatStore } from './../chatStore';

const chatStore = useChatStore();
let text = ref('');
let messagesRef = ref(null);
let messages = ref(chatStore.messages);

defineExpose({ messagesRef });

function sendMessage() {
  if (text.value === '') return;
  chatStore.addMessage({ text: text.value, uid: 'Yo' });
  text.value = '';
}
function getProfileImage(uid) {
  return uid === 'Yo'
    ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVa5p-kzgtT6MdGmW_-LUiLTD1lYyTmcshqA1AFhCxzyRhOmD7JYqiimQlP6dHxovOcw&usqp=CAU'
    : uid === 'Profesor'
    ? 'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528'
    : 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/jsc2023e030153.jpg';
}
function setFloat(uid) {
  return uid === 'Yo'
    ? { float: 'left' }
    : uid === 'Profesor'
    ? { float: 'right' }
    : {};
}
</script>

<style>
#app {
  padding: 2em;
  height: 93%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(206, 251, 253, 1) 0%,
    rgba(76, 248, 255, 1) 53%,
    rgba(37, 246, 255, 1) 100%
  );
}

.panel {
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  padding: 20px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.messages {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: white;
}
.inner {
  padding: 10px;
}
.message {
  text-align: left;
  display: block;
  margin-bottom: 25px;
  clear: both;
  border-radius: 15px;
  padding: 10px;
}

.message-content {
  display: inline-block;
}

.user-name {
  font-weight: bold;
  margin-bottom: 5px;
  color: white; 
}
.Yo {
  color: white;
  float: left;
}
.message.Yo {
  background-color: #6bb9f0;
  color: white;
}
.message.Profesor {
  background-color: #f1f1f1;
  color: black;
}
.Profesor {
  color: red;
  float: right;
}
.user-image img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
form {
  position: relative;
  display: flex;
}
input {
  width: 100%;
  border: none;
  height: 20px;
  padding: 8px;
  border-top: 1px solid #999;
  border-radius: 0px;
  outline: none;
}
button {
  border: none;
  outline: none;
  background: none;
  position: absolute;
  right: 3px;
  top: 4px;
  font-size: 24px;
}

.send-button {
  background-color: #6bb9f0;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
}

.send-button i {
  color: white;
  font-size: 20px;
}
</style>
