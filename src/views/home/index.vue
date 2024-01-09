<script setup lang="ts">
import {ArrowRight, Search} from '@element-plus/icons-vue'
</script>

<template>
  <div id="layout-par">
    <el-container>
      <el-header id="layout-header">
        <div>
          header
        </div>
      </el-header>
      <el-main id="layout-main">
        <el-container>
          <el-aside id="layout-menu">
            <el-card shadow="always" id="menu-card">
              <div class="menu-item" >
                <el-button class="menu-button" type="primary" :icon="Search">
                  系统管理 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <el-icon class="el-icon--right">
                    <ArrowRight/>
                  </el-icon>
                </el-button>
                <div class="menu-item-text-warp">
                  <el-text class="menu-item-child-text">字典</el-text>
                  <el-text class="menu-item-child-text">系统用户</el-text>
                  <el-text class="menu-item-child-text">菜单管理</el-text>
                  <el-text class="menu-item-child-text">菜单管理3333</el-text>
                </div>
              </div>
            </el-card>
          </el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
#layout-par {
  #layout-header {
    background-color: #0E6EB8;
  }

  #layout-main {
    #layout-menu {
      width: 200px;
      height: 100%;

      #menu-card {
        /*min-height: 97%; //height: 97%;*/
        height:600px;
        overflow-y:auto;
        overflow-x:hidden;

        .menu-item {
          display: flex;
          flex-direction: column;
          align-items: center;


          .menu-button {
            width: 160px;
            display: flex;

          }

          .menu-item-text-warp {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            span {
              align-self: normal;
              margin: 2px 0;
              cursor:pointer;
            }
          }
        }

      }
    }

  }
}
</style>