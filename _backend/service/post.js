var mongoose = require('mongoose');

class PostService {
  constructor(){
    this.PostSchema = mongoose.Schema({
      title: String,

    });
    this.Post = mongoose.model('post', this.PostSchema);
  }

  test(){
    

  }
}

module.exports = PostService;
