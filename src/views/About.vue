<template>
  <md-content>
    <md-toolbar md-elevation="1">
      <div style="width:50%;text-align:left;">
        <span class="md-title" style="line-height:48px;padding-right:5px;">第{{countIndex}}题</span>
        <span class="md-caption" style="line-height:48px;">
          <span style="color:green;">{{countRight}}</span>/<span style="color:red;">{{countWrong}}</span>
        </span>
      </div>
      <div style="width:50%;text-align:right;">
        <span class="md-caption" style="line-height:48px;">{{countTimer}}秒</span>
        <md-button class="md-raised" @click="endTest">结束</md-button>
      </div>
    </md-toolbar>
    <div class="md-centerr" style="padding-top:20px;">
      <span class="md-display-5">{{currentWord}}</span>
    </div>
    <div style="padding:20px 80px;">
      <md-field>
        <label for="first-name">输入答案后敲空格或回车</label>
        <md-input v-model="currentAnswer" autofocus="autofocus" @keydown="enterAnswer"/>
      </md-field>
    </div>
    <div style="position:absolute;bottom:5px;left:5px;">
      <span v-if="preResult" class="md-caption" style="color:green;">{{remark}}</span>
      <span v-else class="md-caption" style="color:red;">{{remark}}</span>
    </div>
  </md-content>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "About",
  data() {
    return {
      all:[{i:0,k:"a",v:"あ",t:1,d:1,w:100},{i:10,k:"ka",v:"か",t:1,d:1,w:100},{i:20,k:"sa",v:"さ",t:1,d:1,w:100},
{i:1,k:"i",v:"い",t:1,d:1,w:100},{i:11,k:"ki",v:"き",t:1,d:1,w:100},{i:21,k:"shi",v:"し",t:1,d:1,w:100},
{i:2,k:"u",v:"う",t:1,d:1,w:100},{i:12,k:"ku",v:"く",t:1,d:1,w:100},{i:22,k:"su",v:"す",t:1,d:1,w:100},
{i:3,k:"e",v:"え",t:1,d:1,w:100},{i:13,k:"ke",v:"け",t:1,d:1,w:100},{i:23,k:"se",v:"せ",t:1,d:1,w:100},
{i:4,k:"o",v:"お",t:1,d:1,w:100},{i:14,k:"ko",v:"こ",t:1,d:1,w:100},{i:24,k:"so",v:"そ",t:1,d:1,w:100},
{i:5,k:"a",v:"ア",t:2,d:1,w:100},{i:15,k:"ka",v:"カ",t:2,d:1,w:100},{i:25,k:"sa",v:"サ",t:2,d:1,w:100},
{i:6,k:"i",v:"イ",t:2,d:1,w:100},{i:16,k:"ki",v:"キ",t:2,d:1,w:100},{i:26,k:"shi",v:"シ",t:2,d:1,w:100},
{i:7,k:"u",v:"ウ",t:2,d:1,w:100},{i:17,k:"ku",v:"ク",t:2,d:1,w:100},{i:27,k:"su",v:"ス",t:2,d:1,w:100},
{i:8,k:"e",v:"エ",t:2,d:1,w:100},{i:18,k:"ke",v:"ケ",t:2,d:1,w:100},{i:28,k:"se",v:"セ",t:2,d:1,w:100},
{i:9,k:"o",v:"オ",t:2,d:1,w:100},{i:19,k:"ko",v:"コ",t:2,d:1,w:100},{i:29,k:"so",v:"ソ",t:2,d:1,w:100},

{i:30,k:"ta",v:"た",t:1,d:1,w:100},{i:40,k:"na",v:"な",t:1,d:1,w:100},{i:50,k:"ha",v:"は",t:1,d:1,w:100},
{i:31,k:"chi",v:"ち",t:1,d:1,w:100},{i:41,k:"ni",v:"に",t:1,d:1,w:100},{i:51,k:"hi",v:"ひ",t:1,d:1,w:100},
{i:32,k:"tsu",v:"つ",t:1,d:1,w:100},{i:42,k:"nu",v:"ぬ",t:1,d:1,w:100},{i:52,k:"fu",v:"ふ",t:1,d:1,w:100},
{i:33,k:"te",v:"て",t:1,d:1,w:100},{i:43,k:"ne",v:"ね",t:1,d:1,w:100},{i:53,k:"he",v:"へ",t:1,d:1,w:100},
{i:34,k:"to",v:"と",t:1,d:1,w:100},{i:44,k:"no",v:"の",t:1,d:1,w:100},{i:54,k:"ho",v:"ほ",t:1,d:1,w:100},
{i:35,k:"ta",v:"タ",t:2,d:1,w:100},{i:45,k:"na",v:"ナ",t:2,d:1,w:100},{i:55,k:"ha",v:"ハ",t:2,d:1,w:100},
{i:36,k:"chi",v:"チ",t:2,d:1,w:100},{i:46,k:"ni",v:"ニ",t:2,d:1,w:100},{i:56,k:"hi",v:"ヒ",t:2,d:1,w:100},
{i:37,k:"tsu",v:"ツ",t:2,d:1,w:100},{i:47,k:"nu",v:"ヌ",t:2,d:1,w:100},{i:57,k:"fu",v:"フ",t:2,d:1,w:100},
{i:38,k:"te",v:"テ",t:2,d:1,w:100},{i:48,k:"ne",v:"ネ",t:2,d:1,w:100},{i:58,k:"he",v:"ヘ",t:2,d:1,w:100},
{i:39,k:"to",v:"ト",t:2,d:1,w:100},{i:49,k:"no",v:"ノ",t:2,d:1,w:100},{i:59,k:"ho",v:"ホ",t:2,d:1,w:100},

{i:60,k:"ma",v:"ま",t:1,d:1,w:100},{i:70,k:"ya",v:"ゃ",t:1,d:1,w:100},{i:80,k:"ra",v:"ら",t:1,d:1,w:100},
{i:61,k:"mi",v:"み",t:1,d:1,w:100},{i:71,k:"yu",v:"ゅ",t:1,d:1,w:100},{i:81,k:"ri",v:"り",t:1,d:1,w:100},
{i:62,k:"mu",v:"む",t:1,d:1,w:100},{i:72,k:"yo",v:"ょ",t:1,d:1,w:100},{i:82,k:"ru",v:"る",t:1,d:1,w:100},
{i:63,k:"me",v:"め",t:1,d:1,w:100},{i:73,k:"ya",v:"ャ",t:2,d:1,w:100},{i:83,k:"re",v:"れ",t:1,d:1,w:100},
{i:64,k:"mo",v:"も",t:1,d:1,w:100},{i:74,k:"yu",v:"ュ",t:2,d:1,w:100},{i:84,k:"ro",v:"ろ",t:1,d:1,w:100},
{i:65,k:"ma",v:"マ",t:2,d:1,w:100},{i:75,k:"yo",v:"ヨ",t:2,d:1,w:100},{i:85,k:"ra",v:"ラ",t:2,d:1,w:100},
{i:66,k:"mi",v:"ミ",t:2,d:1,w:100},{i:76,k:"wa",v:"ゎ",t:1,d:1,w:100},{i:86,k:"ri",v:"リ",t:2,d:1,w:100},
{i:67,k:"mu",v:"ム",t:2,d:1,w:100},{i:77,k:"wo",v:"を",t:1,d:1,w:100},{i:87,k:"ru",v:"ル",t:2,d:1,w:100},
{i:68,k:"me",v:"メ",t:2,d:1,w:100},{i:78,k:"wa",v:"ヮ",t:2,d:1,w:100},{i:88,k:"re",v:"レ",t:2,d:1,w:100},
{i:69,k:"mo",v:"モ",t:2,d:1,w:100},{i:79,k:"wo",v:"ヲ",t:2,d:1,w:100},{i:89,k:"ro",v:"ロ",t:2,d:1,w:100},

{i:100,k:"ga",v:"が",t:1,d:2,w:100},{i:110,k:"za",v:"ざ",t:1,d:2,w:100},{i:120,k:"da",v:"だ",t:1,d:2,w:100},
{i:101,k:"gi",v:"ぎ",t:1,d:2,w:100},{i:111,k:"zi",v:"じ",t:1,d:2,w:100},{i:121,k:"di",v:"ぢ",t:1,d:2,w:100},
{i:102,k:"gu",v:"ぐ",t:1,d:2,w:100},{i:112,k:"zu",v:"ず",t:1,d:2,w:100},{i:122,k:"du",v:"づ",t:1,d:2,w:100},
{i:103,k:"ge",v:"げ",t:1,d:2,w:100},{i:113,k:"ze",v:"ぜ",t:1,d:2,w:100},{i:123,k:"de",v:"で",t:1,d:2,w:100},
{i:104,k:"go",v:"ご",t:1,d:2,w:100},{i:114,k:"zo",v:"ぞ",t:1,d:2,w:100},{i:124,k:"do",v:"ど",t:1,d:2,w:100},
{i:105,k:"ga",v:"ガ",t:2,d:2,w:100},{i:115,k:"za",v:"ザ",t:2,d:2,w:100},{i:125,k:"da",v:"ダ",t:2,d:2,w:100},
{i:106,k:"gi",v:"ギ",t:2,d:2,w:100},{i:116,k:"zi",v:"ジ",t:2,d:2,w:100},{i:126,k:"di",v:"ヂ",t:2,d:2,w:100},
{i:107,k:"gu",v:"グ",t:2,d:2,w:100},{i:117,k:"zu",v:"ズ",t:2,d:2,w:100},{i:127,k:"du",v:"ヅ",t:2,d:2,w:100},
{i:108,k:"ge",v:"ゲ",t:2,d:2,w:100},{i:118,k:"ze",v:"ゼ",t:2,d:2,w:100},{i:128,k:"de",v:"デ",t:2,d:2,w:100},
{i:109,k:"go",v:"ゴ",t:2,d:2,w:100},{i:119,k:"zo",v:"ゾ",t:2,d:2,w:100},{i:129,k:"do",v:"ド",t:2,d:2,w:100},

{i:130,k:"ba",v:"ば",t:1,d:2,w:100},{i:140,k:"pa",v:"ぱ",t:1,d:2,w:100},{i:90,k:"n",v:"ん",t:1,d:1,w:100},
{i:131,k:"bi",v:"び",t:1,d:2,w:100},{i:141,k:"pi",v:"ぴ",t:1,d:2,w:100},{i:91,k:"n",v:"ン",t:2,d:1,w:100},
{i:132,k:"bu",v:"ぶ",t:1,d:2,w:100},{i:142,k:"pu",v:"ぷ",t:1,d:2,w:100},{i:92,k:"kya",v:"きゃ",t:1,d:3,w:100},
{i:133,k:"be",v:"べ",t:1,d:2,w:100},{i:143,k:"pe",v:"ぺ",t:1,d:2,w:100},{i:93,k:"kyu",v:"きゅ",t:1,d:3,w:100},
{i:134,k:"bo",v:"ぼ",t:1,d:2,w:100},{i:144,k:"po",v:"ぽ",t:1,d:2,w:100},{i:94,k:"kyo",v:"きょ",t:1,d:3,w:100},
{i:135,k:"ba",v:"バ",t:2,d:2,w:100},{i:145,k:"pa",v:"パ",t:2,d:2,w:100},{i:95,k:"kya",v:"キャ",t:2,d:3,w:100},
{i:136,k:"bi",v:"ビ",t:2,d:2,w:100},{i:146,k:"pi",v:"ピ",t:2,d:2,w:100},{i:96,k:"kyu",v:"キュ",t:2,d:3,w:100},
{i:137,k:"bu",v:"ブ",t:2,d:2,w:100},{i:147,k:"pu",v:"プ",t:2,d:2,w:100},{i:97,k:"kyo",v:"キョ",t:2,d:3,w:100},
{i:138,k:"be",v:"ベ",t:2,d:2,w:100},{i:148,k:"pe",v:"ペ",t:2,d:2,w:100},{i:98,k:"gya",v:"ぎゃ",t:1,d:3,w:100},
{i:139,k:"bo",v:"ボ",t:2,d:2,w:100},{i:149,k:"po",v:"ポ",t:2,d:2,w:100},{i:99,k:"gyu",v:"ぎゅ",t:1,d:3,w:100},

{i:150,k:"gyo",v:"ぎょ",t:1,d:3,w:100},{i:160,k:"ja",v:"じゃ",t:1,d:3,w:100},{i:170,k:"nyu",v:"にゅ",t:1,d:3,w:100},
{i:151,k:"sha",v:"しゃ",t:1,d:3,w:100},{i:161,k:"ju",v:"じゅ",t:1,d:3,w:100},{i:171,k:"nyo",v:"にょ",t:1,d:3,w:100},
{i:152,k:"shu",v:"しゅ",t:1,d:3,w:100},{i:162,k:"jo",v:"じょ",t:1,d:3,w:100},{i:172,k:"hya",v:"ひゃ",t:1,d:3,w:100},
{i:153,k:"sho",v:"しょ",t:1,d:3,w:100},{i:163,k:"ja",v:"ジャ",t:2,d:3,w:100},{i:173,k:"hyu",v:"ひゅ",t:1,d:3,w:100},
{i:154,k:"gya",v:"ギャ",t:2,d:3,w:100},{i:164,k:"ju",v:"ジュ",t:2,d:3,w:100},{i:174,k:"hyo",v:"ひょ",t:1,d:3,w:100},
{i:155,k:"gyu",v:"ギュ",t:2,d:3,w:100},{i:165,k:"jo",v:"ジョ",t:2,d:3,w:100},{i:175,k:"bya",v:"びゃ",t:1,d:3,w:100},
{i:156,k:"gyo",v:"ギョ",t:2,d:3,w:100},{i:166,k:"cha",v:"ちゃ",t:1,d:3,w:100},{i:176,k:"byu",v:"びゅ",t:1,d:3,w:100},
{i:157,k:"sha",v:"シャ",t:2,d:3,w:100},{i:167,k:"chu",v:"ちゅ",t:1,d:3,w:100},{i:177,k:"byo",v:"びょ",t:1,d:3,w:100},
{i:158,k:"shu",v:"シュ",t:2,d:3,w:100},{i:168,k:"cho",v:"ちょ",t:1,d:3,w:100},{i:178,k:"pya",v:"ぴゃ",t:1,d:3,w:100},
{i:159,k:"sho",v:"ショ",t:2,d:3,w:100},{i:169,k:"nya",v:"にゃ",t:1,d:3,w:100},{i:179,k:"pyu",v:"ぴゅ",t:1,d:3,w:100},

{i:180,k:"pyo",v:"ぴょ",t:1,d:3,w:100},{i:190,k:"bya",v:"ビャ",t:2,d:3,w:100},{i:200,k:"ryu",v:"りゅ",t:1,d:3,w:100},
{i:181,k:"cha",v:"チャ",t:2,d:3,w:100},{i:191,k:"byu",v:"ビュ",t:2,d:3,w:100},{i:201,k:"ryo",v:"りょ",t:1,d:3,w:100},
{i:182,k:"chu",v:"チュ",t:2,d:3,w:100},{i:192,k:"byo",v:"ビョ",t:2,d:3,w:100},{i:202,k:"mya",v:"ミャ",t:2,d:3,w:100},
{i:183,k:"cho",v:"チョ",t:2,d:3,w:100},{i:193,k:"pya",v:"ピャ",t:2,d:3,w:100},{i:203,k:"myu",v:"ミュ",t:2,d:3,w:100},
{i:184,k:"nya",v:"ニャ",t:2,d:3,w:100},{i:194,k:"pyu",v:"ピュ",t:2,d:3,w:100},{i:204,k:"myo",v:"ミョ",t:2,d:3,w:100},
{i:185,k:"nyu",v:"ニュ",t:2,d:3,w:100},{i:195,k:"pyo",v:"ピョ",t:2,d:3,w:100},{i:205,k:"rya",v:"リャ",t:2,d:3,w:100},
{i:186,k:"nyo",v:"ニョ",t:2,d:3,w:100},{i:196,k:"mya",v:"みゃ",t:1,d:3,w:100},{i:206,k:"ryu",v:"リュ",t:2,d:3,w:100},
{i:187,k:"hya",v:"ヒャ",t:2,d:3,w:100},{i:197,k:"myu",v:"みゅ",t:1,d:3,w:100},{i:207,k:"ryo",v:"リョ",t:2,d:3,w:100},
{i:188,k:"hyu",v:"ヒュ",t:2,d:3,w:100},{i:198,k:"myo",v:"みょ",t:1,d:3,w:100},
{i:189,k:"hyo",v:"ヒョ",t:2,d:3,w:100},{i:199,k:"rya",v:"りゃ",t:1,d:3,w:100},
],
      timer:null,
      countIndex: 1,
      countTimer: 1,
      countRight: 0,
      countWrong: 0,
      currentQuestion:{},
      currentWord: "吖",
      currentAnswer: "",
      preResult:true,
      remark: "",
    };
  },
  computed: {
    ...mapGetters(["loading", "showDialog", "dialogContent","wordType","difficulty"]),
    
  },
  mounted() {  
    this.countTimer = 0;
    this.timer = setInterval(()=>{ this.countTimer++;}, 1000);
    this.getQuestion();
  },
  methods: {
    ...mapMutations([
      "setLoading",
      "setShowDialog",
      "setDialogContent",
      "setWordType",
      "setDifficulty"
    ]),
    endTest() {
      if(this.countIndex==1){
        this.$router.push("/");
        return;
      }
      this.setShowDialog(true);
      this.setDialogContent("您的测试评分为:"
        + parseInt((this.countRight/(this.countIndex-1)*100))
        + ",用时:"+this.countTimer+"秒");
      var temp = setTimeout(()=>{ this.$router.push("/"); },2000);
    },
    getQuestion(){
      if(this.wordType.length==0 || this.difficulty==0){
        this.$router.push("/");
      }

      //先排除用户没有选择的项
      var copyAll = [];
      this.wordType.forEach(i => {
        this.difficulty.forEach(j => {
          var temparr = this.all.filter(r=>r.t==i && r.d==j);
          temparr.forEach(obj => {
            copyAll.push(obj);
          });
        });
      });

      //按权重排序,筛选

      //随机取值
      var index = parseInt(Math.random()*copyAll.length);
      this.currentQuestion=copyAll[index];
      this.currentWord = this.currentQuestion.v;
    },
    enterAnswer(ev){
      if(this.currentAnswer.trim()=='')return false;
      if(ev.keyCode == 13 || ev.keyCode == 32){
        this.currentAnswer = this.currentAnswer.trim();
        this.validateAnswer();
        this.getQuestion();
        return false;
      }
    },
    validateAnswer(){
      if(this.currentAnswer==this.currentQuestion.k){
        this.countRight++;
        this.preResult=true;
        this.remark = "上一题回答正确.";
      }else{
        this.countWrong++;
        this.preResult=false;
        this.remark=""+this.currentQuestion.v+" 的正确答案为:"+this.currentQuestion.k
      }
      this.currentAnswer='';
      this.countIndex++;
    },
  }
};
</script>
<style scoped>
.md-content {
    z-index: 1;
    width: 100%;
    max-width: 400px;
    position: relative;
    min-height: 440px;
    padding: 0px;
}
.md-centerr {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
}
.md-display-5 {
  font-size: 160px;
  letter-spacing: -0.01em;
  line-height: 160px;
}
</style>
