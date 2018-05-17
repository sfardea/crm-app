<template>
  <div class="buildings-container">
    <h1>Buildings</h1>
    <div v-if="buildings.length > 0" class="table-wrap">
      <!-- <div>
        <router-link v-bind:to="{ name: 'NewPost' }" class="">Add Post</router-link>
      </div> -->
      <table>
        <tr>
          <td width="100">Name</td>
          <td width="550">Adress</td>
          <td width="100" align="center">Receivables</td>
        </tr>
        <tr v-for="building in buildings" :key="building.title">
          <td>{{ building.buildingname }}</td>
          <td>{{ building.location }}</td>
          <td align="center">
            <a href="#">Delete</a>
          </td>
            <!-- <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }">Edit</router-link> | -->
        </tr>
      </table>
    </div>
    <div v-else>
      There are no buildings to display for this user<br/><br/>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'Buildings',
  data () {
    return {
      buildings: []
    }
  },
  mounted () {
    this.getBuildings()
  },
  methods: {
    async getBuildings () {
      const response = await PostsService.fetchBuildings()
      console.log(this.buildings)
      this.buildings = response.data.buildings
    }
  }
}
</script>
<style type="text/css">
.buildings-container {
  margin-top: 6rem;
}
.table-wrap {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
</style>
