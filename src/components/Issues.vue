<template>
    <div class="container">
        <h1>Vue.js + Github</h1>
        <p class="lead">
            Page to load GitHub Issues with Vue
        </p>

        <div class="row">
            <div class="col">
                <div class="form-group">
                    <input v-model="owner" type="text" class="form-control" placeholder="github owner">
                </div>
            </div>

            <div class="col">
                <div class="form-group">
                    <input v-model="repository" type="text" class="form-control" placeholder="github repositório">
                </div>
            </div>

            <div class="col-3">
                <div class="form-group">
                    <button @click.prevent.stop="getIssues()" class="btn btn-success">Search</button>
                    <button class="btn btn-danger">Clean</button>
                </div>
            </div>
        </div>

        <br><hr><br>

        <table class="table table-sm table-bordered">
            <thead>
            <tr>
                <th width="100">#</th>
                <th>Issue Title</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td class="text-center" colspan="2"><img src="/static/loading.svg" alt=""></td>
            </tr>

            <tr v-for="issue in issues" :key="issue.number">
                <td> {{ issue.number }} </td>
                <td> {{ issue.title }} </td>
            </tr>

            <tr>
                <td class="text-center" colspan="2">No Issues Found!</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Issues',

  data () {
    return {
      owner: '',
      repository: '',
      issues: [],
    }
  },

  methods: {
    clear () {
      this.owner = ''
      this.repository = ''
    },

    getIssues () {
      if (this.owner && this.repository) {
      const url = `https://api.github.com/repos/${this.owner}/${this.repository}/issues`
      axios.get(url)
        .then(res => {
          this.issues = res.data
      })    
      }
      
    }
  }
}
</script>
