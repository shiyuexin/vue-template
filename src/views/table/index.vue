<template>
  <div class="app-container">
    <!-- 表格搜索框 -->
    <el-card class="search-card" shadow="always">
      <div slot="header"><div>table</div></div>
      <el-row>
        <el-col :span="12">
          <el-form ref="searchForm" :model="searchForm" label-width="50px" :label-position="'left'" :size="'mini'">
            <el-form-item label="搜索" prop="keyword">
              <el-input v-model="searchForm.keyword" size="mini">
                <el-button slot="append" icon="el-icon-search" />
              </el-input>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12" class="text-a-r">
          <el-button icon="el-icon-search">搜索呗</el-button>
          <el-button type="primary" icon="el-icon-refresh-right" @click="resetSearch('searchForm')">重置</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 表格主体 -->
    <el-card shadow="always">
      <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border highlight-current-row >
        <el-table-column type="index" align="center" label="ID" width="95"></el-table-column>
        <el-table-column label="Title" prop="robotType" />
        <el-table-column label="Pageviews" prop="robotCount" align="center" />
      </el-table>
       <el-pagination class="float-r table-pagination" background
        :current-page="page.page" :page-size="page.size"
        :page-sizes="[20, 50, 100, 200]" :total="page.total"
        layout="total, sizes, prev, pager, next, jumper" 
        @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
    </el-card>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      page: { page: 1, size: 20, total: 0 },
      searchForm:{
        keyword:''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    //获取列表数据
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data;
        this.listLoading = false
      })
    },
    // 重置搜索列表
    resetSearch(formName) {
      this.$refs[formName].resetFields();
      this.fetchData();
    },
    handleSizeChange(val) {
      this.page.size = val || 10
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.page.page = val || 1
      this.fetchData();
    }
  }
}
</script>
