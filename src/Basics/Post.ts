class Post {
  title: string;
  description: string;
  createdAt: Date;
  votes: number;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.createdAt = new Date();
    this.votes = 0;
  }

  getCreatedDate(): string {
    return this.createdAt.toISOString();
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
