class Post {
  title: string;
  description: string;
  date: number;
  votes: number;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.date = Date.now();
    this.votes = 0;
  }

  getVotes(): number {
    return this.votes;
  }

  upVote() {
    this.votes++;
  }

  downVote() {
    this.votes--;
  }
}

export default Post;
