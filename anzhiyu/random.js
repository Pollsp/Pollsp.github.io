var posts=["2024/05/02/hello-world/","2024/05/02/university001/","2024/05/02/Python001/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };