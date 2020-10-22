<template>
  <!-- 采油监控详情页 -->
  <div class="information">
    <el-container>
      <!-- 正文内容部分 -->
      <el-main>
        <!-- 采油井分布图 -->
        <div class="distribution">
            <JMap/>
        </div>
        
      </el-main>
      
    </el-container>
  </div>
</template>
<script>
import "./style.scss";
export default {
  name: "OilInfomartion",
  data() {
    return {
      // 巡井结果
      tableData2: [],
      tableData: [
        {
          date: "2020-03-21",
          name: "c3",
          time: "3813.40-3816.30",
          province: "2.9",
          city: "46",
          address: "16",
          zip: "SQ102",
          try: "油层"
        },
        {
          date: "2020-03-21",
          name: "c3",
          time: "3819.00-3823.00",
          province: "4.0",
          city: "64",
          address: "16",
          zip: "SQ102",
          try: "油层"
        }
      ],
    };
  },
 
  methods: { 
    // 修改时间的格式
    changeTime(option) {
      // currentTime当前时间，假设是 2019-7-2 19:03
      var currentTime = option;
      var reg = new RegExp("-", "g"); //去掉时间里面的-
      var a = currentTime.replace(reg, "");
      var regs = new RegExp(" ", "g"); //去掉时间里面的空格
      var b = a.replace(regs, "");
      var regss = new RegExp(":", "g"); //去掉时间里面的:冒号
      var c = b.replace(regss, "");
      return c;
    },
    timestampToTime(row) {
      var date = new Date(row);
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      var h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      var m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":";
      var s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    },
  }
};
</script>

