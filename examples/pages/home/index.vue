<template>
  <div class="home">
    <div class="top">
      <div class="inner">
        <div class="left">
          <img src="../../assets/images/lixi-logo.png">
        </div>
        <div class="right">
          <h1>
            渐进式
            <br/>
            JavaScript 框架
          </h1>
          <p>
            <a>WHY VUE.JS?</a>
            <a>起步</a>
            <a>GITHUB</a>
          </p>
        </div>
      </div>
    </div>
    <div class="highlights">
      <div class="inner">
        <div class="point">
          <h2>
            易用
          </h2>
          <p>
            已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！
          </p>
        </div>
        <div class="point">
          <h2>
            灵活
          </h2>
          <p>
            不断繁荣的生态系统，<br/>
            可以在一个库和一套完整框架之间自如伸缩。
          </p>
        </div>
        <div class="point">
          <h2>
            高效
          </h2>
          <p>
            20kB min+gzip 运行大小<br/>
            超快虚拟 DOM<br/>
            最省心的优化
          </p>
        </div>
      </div>
    </div>
    <div class="philosophy">
      <div class="inner">
        <div class="left">
          <h2>
            SPEED & PERFORMANCE
          </h2>
          <p>
            现在就在网络平台上实现最大可能的速度，并通过网络工作人员和服务器端渲染更进一步。
          </p>
          <p>
            一起构建的这个模块化示例应用的代码就很易于阅读。当开始构建更大的组件库时，
            会意识到这种代码模块化和清晰度的重要性。并且随着代码重用程度的加深，代码行数也会显著地减少。
          </p>
        </div>
        <div class="right">
          <img src="../../assets/images/speed-performance.svg">
        </div>
      </div>
    </div>
    <div class="philosophy">
      <div class="inner">
        <div class="right">
          <img src="../../assets/images/ultima.png">
        </div>
        <div class="left">
          <h2>
            DEVELOP ACROSS ALL PLATFORMS
          </h2>
          <p>
            现在就在网络平台上实现最大可能的速度，并通过网络工作人员和服务器端渲染更进一步。
          </p>
          <p>
            一起构建的这个模块化示例应用的代码就很易于阅读。当开始构建更大的组件库时，
            会意识到这种代码模块化和清晰度的重要性。并且随着代码重用程度的加深，代码行数也会显著地减少。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  background: #ddd;
  .top{
    padding: 40px 40px 30px;
    .inner{
      max-width: 1260px;
      // height: 10px;
      margin: 0px auto;
      background: lightblue;
      display: flex;
      .left{
        width: 40%;
        img{
          width: 215px;
          height: 215px;
          margin-right: 60px;
          float: right;
        }
      }
      .right{
        width: 60%;
      }
    }
  }
  .highlights{
    padding-bottom: 70px;
    .inner{
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
      display: flex;
      .point{
        width: 33%;
        p{
          padding: 10px 20px;
        }
      }
    }
  }
  .philosophy{
    padding-bottom: 20px;
    padding-top: 50px;
    border-bottom: 1px solid lightblue;
    .inner{
      margin: 0 auto;
      max-width: 900px;
      display: flex;
      .left{
        width: 60%;
        padding-right: 30px;
        padding-top: 20px;
        p{
          padding: 10px 0px;;
        }
      }
      .right{
        width: 40%;
        img{
          height: 222px;
          width: 323px;
        }
      }
    }
  }
}
</style>
