<template>
  <div class="mainwrap">
      <div class="chatwrap">
          <div class="textarea">
            <b-list-group>
                <b-list-group-item :variant="getvariant(message)" v-for="(message,index) in messages"
                :key="index"
                >
                  {{message.time}}|
                  <span style="font-weight: 900">{{message.username}}</span>: 
                  <span v-bind:class="getMessageClass(message)">{{message.text}}</span>
                </b-list-group-item>
            </b-list-group>   
          </div>
          <div class="input">
            <b-form-input 
              type="text" 
              id="myInput" 
              v-model="textMessage" 
              autofocus 
              :value="value"
              v-bind:class="getInputClass"
              ></b-form-input>
            <b-button variant="dark" id="myBtn" @click="sendMessage">Отправить</b-button>
          </div>
      </div>
      <div class="usersList">
          <p class="listname">Список игроков:</p>
          <b-list-group>
            <b-list-group-item v-for="(user,index) in users"
            :key="index"
            >{{user.username}}</b-list-group-item>
          </b-list-group>
      </div>
  </div>  
</template>

<script>

export default {
  data: function () {
    return {
        username:"",
        visible:false,
        userId:"",
        messages:[],
        users:[],
        textMessage:"",
        ingame:"",


    }
  },
  sockets:{
    loggedIn(user){
        this.username=user.username
        this.userId=user.id
    },
    newMessage(message){
      this.messages.push(message)
      console.log(this.messages)
    },
    getUsers(users){
      this.users=users
    },
    gameStart(){
      this.ingame=true
      this.textMessage=this.value
    },
    youWin() {
      this.ingame=false
      this.textMessage=this.value
    },
    youLose() {
      this.ingame=false
      this.textMessage=this.value
    },
    Draw() {
      this.ingame=false
      this.textMessage=this.value
    },
  },
  methods:{
    sendMessage(){
      this.$socket.emit("sendMessage",{username:this.username,textMessage:this.textMessage})
      this.textMessage=this.value
      
    },
    getvariant(message){
      if(message.username=="admin"){
        return "warning"
      }else if(message.lobbyname){
        return "danger"
      }else{
        return "light"
      }
    },
    getMessageClass(message){
      if(message.username==this.username){
        return "tomeMessage"
      } 
    }
  },
  computed:{
    value(){
      if (this.ingame){
        return "/"
      } else {
        return ""
      }
    },    
    getInputClass(){
        return{
          toAllBG: !this.ingame && this.textMessage.length<1,
          fightInputBG: this.ingame && this.textMessage.length<2
        }

    },


  },
  updated: function () {
    this.$nextTick(function () {
      var myDiv = document.querySelector(".textarea")
      myDiv.scrollTop = myDiv.scrollHeight 
    })
  },
  mounted: function () {
      var input = document.getElementById("myInput");
      input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("myBtn").click();
        }
      });
    },
}
</script>

<style>
    .mainwrap{
      padding: 10px;
      display: flex;
      height: calc(100vh - 340px);
      justify-content: space-between;
        
    }
    .chatwrap{
      display: flex;
      flex-direction: column;
      height: 100%;
      flex-grow: 1;
    }
    .textarea{
      overflow: auto; 
      margin-bottom: 10px;
      flex-grow: 1;
      padding-bottom:10px ;

    }
    .input{
      display: flex;
      justify-content: space-between;
    }
    .input input{
      flex-grow: 0.99;
    }
    .toAllBG{
      background-image: url(../assets/toALL.svg);
      background-repeat:no-repeat;
      background-position: 5%;

    }
    .fightInputBG{
      background-image: url(../assets/toFight.svg);
      background-repeat:no-repeat;
      background-position: 5%;
    }
    .tomeMessage{
      text-decoration: underline;
      font-weight: 700;
    }
    .usersList{
      height: 100%;
      width: 350px;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }
    .list{
      overflow: auto;
      margin: 0px;
      flex-grow: 1;
      padding-left: 20px;
    }
    .chat{
      padding-left:10px;
      list-style: none;
    }
</style>