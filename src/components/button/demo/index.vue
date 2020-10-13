<template>
  <div>
    <div>
      <lxv-button>默认按钮</lxv-button>
      <lxv-button type="primary">主要按钮</lxv-button>
      <lxv-button type="success">成功按钮</lxv-button>
      <lxv-button type="info">信息按钮</lxv-button>
      <lxv-button type="warning">警告按钮</lxv-button>
      <lxv-button type="danger">危险按钮</lxv-button>
    </div>
    <div>
      <lxv-button plain>朴素按钮</lxv-button>
      <lxv-button type="primary" plain>主要按钮</lxv-button>
      <lxv-button type="success" plain>成功按钮</lxv-button>
      <lxv-button type="info" plain>信息按钮</lxv-button>
      <lxv-button type="warning" plain>警告按钮</lxv-button>
      <lxv-button type="danger" plain>危险按钮</lxv-button>
    </div>
    <div>
      <lxv-button round>圆角按钮</lxv-button>
      <lxv-button type="primary" round>主要按钮</lxv-button>
      <lxv-button type="success" round>成功按钮</lxv-button>
      <lxv-button type="info" round>信息按钮</lxv-button>
      <lxv-button type="warning" round>警告按钮</lxv-button>
      <lxv-button type="danger" round>危险按钮</lxv-button>
    </div>
    <div>
      <lxv-button icon="el-icon-search" circle></lxv-button>
      <lxv-button type="primary" icon="el-icon-edit" circle></lxv-button>
      <lxv-button type="success" icon="el-icon-check" circle></lxv-button>
      <lxv-button type="info" icon="el-icon-message" circle></lxv-button>
      <lxv-button type="warning" icon="el-icon-star-off" circle></lxv-button>
      <lxv-button type="danger" icon="el-icon-delete" circle></lxv-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "lxv-demo"
  }
</script>