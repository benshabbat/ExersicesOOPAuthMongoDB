# Project 05 - Blog System 📝

## 🎯 Project Goal

Build a complete blog system with posts, comments, categories, tags, user management, and content moderation. This intermediate-to-advanced project teaches content management, user relationships, and filtering/searching capabilities.

## 📖 Project Description

Create a blog platform where users can write posts, comment on posts, organize content with categories and tags, moderate comments, and search/filter posts with comprehensive testing.

## 🎭 User Stories

As a blogger, I want to:
- ✅ Create, edit, and delete blog posts
- ✅ Assign categories and tags to posts
- ✅ Publish and unpublish posts
- ✅ View post statistics (views, comments)
- ✅ Moderate comments on my posts

As a reader, I want to:
- ✅ Read published posts
- ✅ Comment on posts
- ✅ Search posts by keyword
- ✅ Filter posts by category or tag
- ✅ View author profiles

## 📋 Requirements

### User Class

**Properties:**
- `id` - Unique user identifier
- `username` - Username (unique)
- `email` - Email address
- `displayName` - Display name
- `bio` - User biography
- `role` - 'admin', 'author', or 'reader'
- `joinedAt` - Registration date
- `#posts` (private) - User's posts
- `#comments` (private) - User's comments

**Methods:**
- `constructor(id, username, email, displayName, role)`
- `createPost(title, content, categories, tags)` - Create new post
- `editPost(postId, updates)` - Edit own post
- `deletePost(postId)` - Delete own post
- `addComment(post, content)` - Comment on post
- `getPosts()` - Get user's posts
- `getComments()` - Get user's comments
- `getProfile()` - Get public profile

### Category Class

**Properties:**
- `id` - Unique category identifier
- `name` - Category name
- `slug` - URL-friendly slug
- `description` - Category description

**Methods:**
- `constructor(id, name, description)`
- `generateSlug()` - Create URL slug
- `getPostCount()` - Count posts in category

### Tag Class

**Properties:**
- `name` - Tag name
- `slug` - URL-friendly slug

**Methods:**
- `constructor(name)`
- `generateSlug()` - Create URL slug

### Post Class

**Properties:**
- `id` - Unique post identifier
- `title` - Post title
- `content` - Post content
- `author` - User who created post
- `categories` - Array of categories
- `tags` - Array of tags
- `status` - 'draft', 'published', 'archived'
- `#comments` (private) - Post comments
- `views` - View count
- `createdAt` - Creation date
- `updatedAt` - Last update date
- `publishedAt` - Publication date

**Methods:**
- `constructor(id, title, content, author, categories, tags)`
- `publish()` - Publish post
- `unpublish()` - Unpublish post
- `archive()` - Archive post
- `edit(title, content, categories, tags)` - Edit post
- `addComment(comment)` - Add comment to post
- `removeComment(commentId)` - Remove comment
- `getComments(options)` - Get comments (filter by status)
- `incrementViews()` - Increase view count
- `hasCategory(categorySlug)` - Check if post has category
- `hasTag(tagSlug)` - Check if post has tag
- `getExcerpt(length)` - Get post excerpt
- `getReadingTime()` - Estimate reading time

### Comment Class

**Properties:**
- `id` - Unique comment identifier
- `post` - Post being commented on
- `author` - User who commented
- `content` - Comment content
- `status` - 'pending', 'approved', 'spam'
- `parentComment` - Parent comment (for replies)
- `#replies` (private) - Child comments
- `createdAt` - Creation date

**Methods:**
- `constructor(id, post, author, content, parentComment)`
- `approve()` - Approve comment
- `markAsSpam()` - Mark as spam
- `addReply(reply)` - Add reply to comment
- `getReplies()` - Get all replies
- `isReply()` - Check if comment is a reply

### BlogSystem Class (Main System)

**Properties:**
- `#posts` (private) - All posts
- `#users` (private) - All users
- `#categories` (private) - All categories

**Methods:**
- `addPost(post)` - Add post to system
- `removePost(postId)` - Remove post
- `getPost(postId)` - Get specific post
- `getPublishedPosts()` - Get all published posts
- `searchPosts(keyword)` - Search posts by keyword
- `filterByCategory(categorySlug)` - Filter posts by category
- `filterByTag(tagSlug)` - Filter posts by tag
- `filterByAuthor(authorId)` - Filter posts by author
- `getPopularPosts(limit)` - Get most viewed posts
- `getRecentPosts(limit)` - Get recent posts
- `addCategory(category)` - Add category
- `getCategories()` - Get all categories
- `addUser(user)` - Add user
- `getUser(userId)` - Get user by ID

## 🧪 Testing Requirements

Write comprehensive tests for:
- ✅ User creation and roles
- ✅ Post creation, editing, deletion
- ✅ Post status transitions (draft → published → archived)
- ✅ Categories and tags management
- ✅ Comment creation and moderation
- ✅ Comment replies (nested comments)
- ✅ Search functionality
- ✅ Filtering (by category, tag, author)
- ✅ Post statistics (views, reading time)
- ✅ Permission checks (only author can edit/delete)
- ✅ Edge cases (empty content, invalid users, etc.)

## 🎯 Hints

<details>
<summary>💡 Hint 1: User Class with Posts and Comments</summary>

```javascript
class User {
  #posts = [];
  #comments = [];

  constructor(id, username, email, displayName, role = 'reader') {
    if (!id || !username || !email) {
      throw new Error('ID, username, and email are required');
    }
    if (!['admin', 'author', 'reader'].includes(role)) {
      throw new Error('Invalid role');
    }

    this.id = id;
    this.username = username;
    this.email = email;
    this.displayName = displayName || username;
    this.bio = '';
    this.role = role;
    this.joinedAt = new Date();
  }

  createPost(title, content, categories = [], tags = []) {
    if (this.role === 'reader') {
      throw new Error('Readers cannot create posts');
    }

    const post = new Post(
      Date.now().toString(),
      title,
      content,
      this,
      categories,
      tags
    );
    
    this.#posts.push(post);
    return post;
  }

  getPosts() {
    return [...this.#posts];
  }

  getProfile() {
    return {
      id: this.id,
      username: this.username,
      displayName: this.displayName,
      bio: this.bio,
      role: this.role,
      postCount: this.#posts.length,
      commentCount: this.#comments.length,
      joinedAt: this.joinedAt
    };
  }
}
```

Key points:
- Private arrays for posts and comments
- Role-based permissions
- Return copies to prevent external modification
</details>

<details>
<summary>💡 Hint 2: Category and Tag Classes</summary>

```javascript
class Category {
  constructor(id, name, description = '') {
    if (!name) {
      throw new Error('Category name is required');
    }

    this.id = id;
    this.name = name;
    this.slug = this.generateSlug(name);
    this.description = description;
  }

  generateSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}

class Tag {
  constructor(name) {
    if (!name) {
      throw new Error('Tag name is required');
    }

    this.name = name;
    this.slug = this.generateSlug(name);
  }

  generateSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
```

Slug generation:
- Convert to lowercase
- Remove special characters
- Replace spaces with hyphens
- Trim leading/trailing hyphens
</details>

<details>
<summary>💡 Hint 3: Post Class with Status Management</summary>

```javascript
class Post {
  #comments = [];

  constructor(id, title, content, author, categories = [], tags = []) {
    if (!id || !title || !content || !author) {
      throw new Error('ID, title, content, and author are required');
    }

    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.categories = categories;
    this.tags = tags;
    this.status = 'draft';
    this.views = 0;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.publishedAt = null;
  }

  publish() {
    if (this.status === 'published') {
      throw new Error('Post is already published');
    }
    this.status = 'published';
    this.publishedAt = new Date();
  }

  unpublish() {
    if (this.status !== 'published') {
      throw new Error('Post is not published');
    }
    this.status = 'draft';
    this.publishedAt = null;
  }

  archive() {
    this.status = 'archived';
  }

  edit(title, content, categories, tags) {
    if (title) this.title = title;
    if (content) this.content = content;
    if (categories) this.categories = categories;
    if (tags) this.tags = tags;
    this.updatedAt = new Date();
  }

  incrementViews() {
    this.views++;
  }

  getExcerpt(length = 200) {
    if (this.content.length <= length) {
      return this.content;
    }
    return this.content.substring(0, length) + '...';
  }

  getReadingTime() {
    const wordsPerMinute = 200;
    const wordCount = this.content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }
}
```

Important:
- Status transitions must be valid
- Track publishing timestamp
- Update timestamps on edits
</details>

<details>
<summary>💡 Hint 4: Comment System with Replies</summary>

```javascript
class Comment {
  #replies = [];

  constructor(id, post, author, content, parentComment = null) {
    if (!id || !post || !author || !content) {
      throw new Error('ID, post, author, and content are required');
    }

    this.id = id;
    this.post = post;
    this.author = author;
    this.content = content.trim();
    this.status = 'pending';
    this.parentComment = parentComment;
    this.createdAt = new Date();

    // Add to parent if this is a reply
    if (parentComment) {
      parentComment.addReply(this);
    }
  }

  approve() {
    if (this.status === 'approved') {
      throw new Error('Comment already approved');
    }
    this.status = 'approved';
  }

  markAsSpam() {
    this.status = 'spam';
  }

  addReply(reply) {
    if (!(reply instanceof Comment)) {
      throw new Error('Reply must be a Comment instance');
    }
    this.#replies.push(reply);
  }

  getReplies() {
    return [...this.#replies];
  }

  isReply() {
    return this.parentComment !== null;
  }

  getAllRepliesCount() {
    let count = this.#replies.length;
    for (const reply of this.#replies) {
      count += reply.getAllRepliesCount();
    }
    return count;
  }
}
```

Nested comments:
- Parent-child relationship
- Recursive reply counting
- Moderation status
</details>

<details>
<summary>💡 Hint 5: Blog System - Search and Filter</summary>

```javascript
class BlogSystem {
  #posts = [];
  #users = [];
  #categories = [];

  addPost(post) {
    if (!(post instanceof Post)) {
      throw new Error('Must be a Post instance');
    }
    this.#posts.push(post);
  }

  getPublishedPosts() {
    return this.#posts.filter(post => post.status === 'published');
  }

  searchPosts(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return this.getPublishedPosts().filter(post =>
      post.title.toLowerCase().includes(lowerKeyword) ||
      post.content.toLowerCase().includes(lowerKeyword)
    );
  }

  filterByCategory(categorySlug) {
    return this.getPublishedPosts().filter(post =>
      post.categories.some(cat => cat.slug === categorySlug)
    );
  }

  filterByTag(tagSlug) {
    return this.getPublishedPosts().filter(post =>
      post.tags.some(tag => tag.slug === tagSlug)
    );
  }

  filterByAuthor(authorId) {
    return this.getPublishedPosts().filter(post =>
      post.author.id === authorId
    );
  }

  getPopularPosts(limit = 10) {
    return this.getPublishedPosts()
      .sort((a, b) => b.views - a.views)
      .slice(0, limit);
  }

  getRecentPosts(limit = 10) {
    return this.getPublishedPosts()
      .sort((a, b) => b.publishedAt - a.publishedAt)
      .slice(0, limit);
  }
}
```

Filter patterns:
- Chain filters for complex queries
- Always filter published posts only
- Sort before limiting results
</details>

<details>
<summary>💡 Hint 6: Post Comments Management</summary>

```javascript
// In Post class
addComment(comment) {
  if (!(comment instanceof Comment)) {
    throw new Error('Must be a Comment instance');
  }
  if (comment.post.id !== this.id) {
    throw new Error('Comment does not belong to this post');
  }
  this.#comments.push(comment);
}

removeComment(commentId) {
  const index = this.#comments.findIndex(c => c.id === commentId);
  if (index === -1) {
    throw new Error('Comment not found');
  }
  this.#comments.splice(index, 1);
}

getComments(options = {}) {
  let comments = [...this.#comments];

  // Filter by status
  if (options.status) {
    comments = comments.filter(c => c.status === options.status);
  }

  // Exclude replies (top-level only)
  if (options.topLevelOnly) {
    comments = comments.filter(c => !c.isReply());
  }

  // Sort by date
  if (options.sortBy === 'newest') {
    comments.sort((a, b) => b.createdAt - a.createdAt);
  } else {
    comments.sort((a, b) => a.createdAt - b.createdAt);
  }

  return comments;
}

getApprovedCommentsCount() {
  return this.#comments.filter(c => c.status === 'approved').length;
}
```

Comment filtering:
- By status (pending, approved, spam)
- Top-level vs all comments
- Sort options
</details>

<details>
<summary>⚠️ Hint 7: Common Pitfalls</summary>

Watch out for:
- ❌ Not validating user permissions before actions
- ❌ Forgetting to update timestamps on edits
- ❌ Not filtering by post status in searches
- ❌ Memory leaks from circular references (post ↔ comments)
- ❌ Not sanitizing user input (XSS vulnerabilities)
- ❌ Allowing duplicate categories/tags
- ❌ Not handling deleted users gracefully
- ❌ Incorrect reading time calculations
- ❌ Not validating slug uniqueness
- ❌ Exposing private data in API responses
</details>

## 🏆 Bonus Challenges

1. **Post Revisions** ⭐⭐
   - Track edit history
   - Revert to previous versions

2. **Featured Posts** ⭐
   - Pin important posts
   - Display in special section

3. **Related Posts** ⭐⭐
   - Suggest similar posts
   - Based on tags/categories

4. **User Following** ⭐⭐
   - Follow authors
   - Get follower feed

5. **Content Moderation Queue** ⭐⭐⭐
   - Approve/reject posts
   - Automated spam detection
   - Moderation dashboard

6. **RSS Feed Generation** ⭐⭐
   - Generate RSS XML
   - Per-category feeds

7. **Full-Text Search** ⭐⭐⭐
   - Advanced search with operators
   - Search ranking
   - Highlight results

## ✅ Completion Checklist

- [ ] All 6 classes implemented
- [ ] User roles working correctly
- [ ] Post CRUD operations complete
- [ ] Categories and tags working
- [ ] Comment system with replies
- [ ] Comment moderation functional
- [ ] Search functionality working
- [ ] All filters working (category, tag, author)
- [ ] Post statistics accurate
- [ ] 40+ comprehensive tests
- [ ] Permission checks enforced
- [ ] Edge cases handled

---

## 🔐 Complete Solution

<details>
<summary>🎯 Click to reveal complete solution (Try solving it yourself first!)</summary>

### user.js

```javascript
import Post from './post.js';
import Comment from './comment.js';

class User {
  #posts = [];
  #comments = [];

  constructor(id, username, email, displayName, role = 'reader') {
    if (!id || !username || !email) {
      throw new Error('ID, username, and email are required');
    }
    if (!['admin', 'author', 'reader'].includes(role)) {
      throw new Error('Invalid role. Must be admin, author, or reader');
    }
    if (!this.#isValidEmail(email)) {
      throw new Error('Invalid email format');
    }

    this.id = id;
    this.username = username;
    this.email = email;
    this.displayName = displayName || username;
    this.bio = '';
    this.role = role;
    this.joinedAt = new Date();
  }

  #isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  createPost(title, content, categories = [], tags = []) {
    if (this.role === 'reader') {
      throw new Error('Readers cannot create posts');
    }

    const post = new Post(
      Date.now().toString() + Math.random(),
      title,
      content,
      this,
      categories,
      tags
    );
    
    this.#posts.push(post);
    return post;
  }

  editPost(postId, updates) {
    const post = this.#posts.find(p => p.id === postId);
    if (!post) {
      throw new Error('Post not found or does not belong to this user');
    }

    post.edit(
      updates.title,
      updates.content,
      updates.categories,
      updates.tags
    );

    return post;
  }

  deletePost(postId) {
    const index = this.#posts.findIndex(p => p.id === postId);
    if (index === -1) {
      throw new Error('Post not found or does not belong to this user');
    }

    this.#posts.splice(index, 1);
  }

  addComment(post, content) {
    const comment = new Comment(
      Date.now().toString() + Math.random(),
      post,
      this,
      content
    );

    this.#comments.push(comment);
    post.addComment(comment);
    
    return comment;
  }

  getPosts() {
    return [...this.#posts];
  }

  getComments() {
    return [...this.#comments];
  }

  getProfile() {
    return {
      id: this.id,
      username: this.username,
      displayName: this.displayName,
      bio: this.bio,
      role: this.role,
      postCount: this.#posts.length,
      commentCount: this.#comments.length,
      joinedAt: this.joinedAt
    };
  }
}

export default User;
```

### category.js & tag.js

```javascript
// category.js
class Category {
  constructor(id, name, description = '') {
    if (!id || !name) {
      throw new Error('Category ID and name are required');
    }

    this.id = id;
    this.name = name;
    this.slug = this.generateSlug(name);
    this.description = description;
  }

  generateSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}

export default Category;

// tag.js
class Tag {
  constructor(name) {
    if (!name || typeof name !== 'string') {
      throw new Error('Tag name is required');
    }

    this.name = name.trim();
    this.slug = this.generateSlug(name);
  }

  generateSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}

export default Tag;
```

### post.js

```javascript
class Post {
  #comments = [];

  constructor(id, title, content, author, categories = [], tags = []) {
    if (!id || !title || !content || !author) {
      throw new Error('ID, title, content, and author are required');
    }

    this.id = id;
    this.title = title.trim();
    this.content = content.trim();
    this.author = author;
    this.categories = categories;
    this.tags = tags;
    this.status = 'draft';
    this.views = 0;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.publishedAt = null;
  }

  publish() {
    if (this.status === 'published') {
      throw new Error('Post is already published');
    }
    if (this.status === 'archived') {
      throw new Error('Cannot publish archived post');
    }
    this.status = 'published';
    this.publishedAt = new Date();
  }

  unpublish() {
    if (this.status !== 'published') {
      throw new Error('Post is not published');
    }
    this.status = 'draft';
    this.publishedAt = null;
  }

  archive() {
    this.status = 'archived';
  }

  edit(title, content, categories, tags) {
    if (title !== undefined) this.title = title.trim();
    if (content !== undefined) this.content = content.trim();
    if (categories !== undefined) this.categories = categories;
    if (tags !== undefined) this.tags = tags;
    this.updatedAt = new Date();
  }

  addComment(comment) {
    if (!comment) {
      throw new Error('Comment is required');
    }
    if (comment.post.id !== this.id) {
      throw new Error('Comment does not belong to this post');
    }
    this.#comments.push(comment);
  }

  removeComment(commentId) {
    const index = this.#comments.findIndex(c => c.id === commentId);
    if (index === -1) {
      throw new Error('Comment not found');
    }
    this.#comments.splice(index, 1);
  }

  getComments(options = {}) {
    let comments = [...this.#comments];

    if (options.status) {
      comments = comments.filter(c => c.status === options.status);
    }

    if (options.topLevelOnly) {
      comments = comments.filter(c => !c.isReply());
    }

    if (options.sortBy === 'newest') {
      comments.sort((a, b) => b.createdAt - a.createdAt);
    } else {
      comments.sort((a, b) => a.createdAt - b.createdAt);
    }

    return comments;
  }

  incrementViews() {
    this.views++;
  }

  hasCategory(categorySlug) {
    return this.categories.some(cat => cat.slug === categorySlug);
  }

  hasTag(tagSlug) {
    return this.tags.some(tag => tag.slug === tagSlug);
  }

  getExcerpt(length = 200) {
    if (this.content.length <= length) {
      return this.content;
    }
    return this.content.substring(0, length).trim() + '...';
  }

  getReadingTime() {
    const wordsPerMinute = 200;
    const wordCount = this.content.split(/\s+/).filter(w => w.length > 0).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  }

  getApprovedCommentsCount() {
    return this.#comments.filter(c => c.status === 'approved').length;
  }
}

export default Post;
```

### comment.js

```javascript
class Comment {
  #replies = [];

  constructor(id, post, author, content, parentComment = null) {
    if (!id || !post || !author || !content) {
      throw new Error('ID, post, author, and content are required');
    }

    this.id = id;
    this.post = post;
    this.author = author;
    this.content = content.trim();
    this.status = 'pending';
    this.parentComment = parentComment;
    this.createdAt = new Date();

    if (parentComment) {
      if (!(parentComment instanceof Comment)) {
        throw new Error('Parent must be a Comment instance');
      }
      parentComment.addReply(this);
    }
  }

  approve() {
    if (this.status === 'approved') {
      throw new Error('Comment already approved');
    }
    this.status = 'approved';
  }

  markAsSpam() {
    this.status = 'spam';
  }

  addReply(reply) {
    if (!(reply instanceof Comment)) {
      throw new Error('Reply must be a Comment instance');
    }
    this.#replies.push(reply);
  }

  getReplies() {
    return [...this.#replies];
  }

  isReply() {
    return this.parentComment !== null;
  }

  getAllRepliesCount() {
    let count = this.#replies.length;
    for (const reply of this.#replies) {
      count += reply.getAllRepliesCount();
    }
    return count;
  }
}

export default Comment;
```

### blog-system.js

```javascript
import Post from './post.js';
import User from './user.js';
import Category from './category.js';

class BlogSystem {
  #posts = [];
  #users = [];
  #categories = [];

  addPost(post) {
    if (!(post instanceof Post)) {
      throw new Error('Must be a Post instance');
    }
    this.#posts.push(post);
  }

  removePost(postId) {
    const index = this.#posts.findIndex(p => p.id === postId);
    if (index === -1) {
      throw new Error('Post not found');
    }
    this.#posts.splice(index, 1);
  }

  getPost(postId) {
    const post = this.#posts.find(p => p.id === postId);
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  }

  getPublishedPosts() {
    return this.#posts.filter(post => post.status === 'published');
  }

  searchPosts(keyword) {
    if (!keyword || typeof keyword !== 'string') {
      throw new Error('Valid keyword is required');
    }

    const lowerKeyword = keyword.toLowerCase().trim();
    return this.getPublishedPosts().filter(post =>
      post.title.toLowerCase().includes(lowerKeyword) ||
      post.content.toLowerCase().includes(lowerKeyword)
    );
  }

  filterByCategory(categorySlug) {
    return this.getPublishedPosts().filter(post =>
      post.hasCategory(categorySlug)
    );
  }

  filterByTag(tagSlug) {
    return this.getPublishedPosts().filter(post =>
      post.hasTag(tagSlug)
    );
  }

  filterByAuthor(authorId) {
    return this.getPublishedPosts().filter(post =>
      post.author.id === authorId
    );
  }

  getPopularPosts(limit = 10) {
    return this.getPublishedPosts()
      .sort((a, b) => b.views - a.views)
      .slice(0, limit);
  }

  getRecentPosts(limit = 10) {
    return this.getPublishedPosts()
      .sort((a, b) => b.publishedAt - a.publishedAt)
      .slice(0, limit);
  }

  addCategory(category) {
    if (!(category instanceof Category)) {
      throw new Error('Must be a Category instance');
    }
    
    const exists = this.#categories.some(c => c.slug === category.slug);
    if (exists) {
      throw new Error('Category with this slug already exists');
    }
    
    this.#categories.push(category);
  }

  getCategories() {
    return [...this.#categories];
  }

  addUser(user) {
    if (!(user instanceof User)) {
      throw new Error('Must be a User instance');
    }

    const exists = this.#users.some(u => 
      u.username === user.username || u.email === user.email
    );
    if (exists) {
      throw new Error('User with this username or email already exists');
    }

    this.#users.push(user);
  }

  getUser(userId) {
    const user = this.#users.find(u => u.id === userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}

export default BlogSystem;
```

### blog-system.test.js

```javascript
import { test } from 'node:test';
import assert from 'node:assert';
import User from './user.js';
import Category from './category.js';
import Tag from './tag.js';
import Post from './post.js';
import Comment from './comment.js';
import BlogSystem from './blog-system.js';

// User Tests
test('should create user with valid data', () => {
  const user = new User('1', 'john_doe', 'john@example.com', 'John Doe', 'author');
  assert.strictEqual(user.username, 'john_doe');
  assert.strictEqual(user.role, 'author');
});

test('should validate email format', () => {
  assert.throws(() => {
    new User('1', 'john', 'invalid-email', 'John');
  }, Error);
});

test('should only allow valid roles', () => {
  assert.throws(() => {
    new User('1', 'john', 'john@test.com', 'John', 'invalid');
  }, Error);
});

test('should allow authors to create posts', () => {
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const post = author.createPost('My Post', 'Content here', [], []);
  
  assert.ok(post instanceof Post);
  assert.strictEqual(author.getPosts().length, 1);
});

test('should prevent readers from creating posts', () => {
  const reader = new User('1', 'reader1', 'reader@test.com', 'Reader', 'reader');
  
  assert.throws(() => {
    reader.createPost('Title', 'Content');
  }, Error);
});

// Category & Tag Tests
test('should create category with slug', () => {
  const category = new Category('1', 'JavaScript Tips', 'JS tutorials');
  assert.strictEqual(category.name, 'JavaScript Tips');
  assert.strictEqual(category.slug, 'javascript-tips');
});

test('should create tag with slug', () => {
  const tag = new Tag('Node.js');
  assert.strictEqual(tag.name, 'Node.js');
  assert.strictEqual(tag.slug, 'nodejs');
});

test('should generate proper slugs', () => {
  const tag = new Tag('Hello World! Test');
  assert.strictEqual(tag.slug, 'hello-world-test');
});

// Post Tests
test('should create post in draft status', () => {
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const post = new Post('1', 'Title', 'Content', author);
  
  assert.strictEqual(post.status, 'draft');
  assert.strictEqual(post.publishedAt, null);
});

test('should publish post', () => {
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const post = new Post('1', 'Title', 'Content', author);
  
  post.publish();
  
  assert.strictEqual(post.status, 'published');
  assert.ok(post.publishedAt instanceof Date);
});

test('should unpublish post', () => {
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const post = new Post('1', 'Title', 'Content', author);
  
  post.publish();
  post.unpublish();
  
  assert.strictEqual(post.status, 'draft');
  assert.strictEqual(post.publishedAt, null);
});

test('should calculate reading time', () => {
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const content = 'word '.repeat(400); // 400 words = 2 minutes
  const post = new Post('1', 'Title', content, author);
  
  assert.strictEqual(post.getReadingTime(), 2);
});

test('should generate excerpt', () => {
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const content = 'a'.repeat(300);
  const post = new Post('1', 'Title', content, author);
  
  const excerpt = post.getExcerpt(50);
  assert.strictEqual(excerpt.length, 54); // 50 + '...'
});

test('should increment views', () => {
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const post = new Post('1', 'Title', 'Content', author);
  
  post.incrementViews();
  post.incrementViews();
  
  assert.strictEqual(post.views, 2);
});

// Comment Tests
test('should create comment', () => {
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const post = new Post('1', 'Title', 'Content', author);
  const commenter = new User('2', 'commenter', 'comm@test.com', 'Commenter');
  
  const comment = new Comment('1', post, commenter, 'Great post!');
  
  assert.strictEqual(comment.status, 'pending');
  assert.strictEqual(comment.author, commenter);
});

test('should approve comment', () => {
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const post = new Post('1', 'Title', 'Content', author);
  const commenter = new User('2', 'commenter', 'comm@test.com', 'Commenter');
  
  const comment = new Comment('1', post, commenter, 'Great post!');
  comment.approve();
  
  assert.strictEqual(comment.status, 'approved');
});

test('should mark comment as spam', () => {
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const post = new Post('1', 'Title', 'Content', author);
  const commenter = new User('2', 'commenter', 'comm@test.com', 'Commenter');
  
  const comment = new Comment('1', post, commenter, 'Spam!');
  comment.markAsSpam();
  
  assert.strictEqual(comment.status, 'spam');
});

test('should create nested comments (replies)', () => {
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const post = new Post('1', 'Title', 'Content', author);
  const user1 = new User('2', 'user1', 'user1@test.com', 'User 1');
  const user2 = new User('3', 'user2', 'user2@test.com', 'User 2');
  
  const comment = new Comment('1', post, user1, 'Original comment');
  const reply = new Comment('2', post, user2, 'Reply', comment);
  
  assert.strictEqual(reply.isReply(), true);
  assert.strictEqual(comment.getReplies().length, 1);
});

// BlogSystem Tests
test('should add and retrieve posts', () => {
  const system = new BlogSystem();
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const post = new Post('1', 'Title', 'Content', author);
  
  system.addPost(post);
  
  assert.strictEqual(system.getPost('1'), post);
});

test('should get only published posts', () => {
  const system = new BlogSystem();
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  
  const post1 = new Post('1', 'Published', 'Content', author);
  post1.publish();
  
  const post2 = new Post('2', 'Draft', 'Content', author);
  
  system.addPost(post1);
  system.addPost(post2);
  
  const published = system.getPublishedPosts();
  assert.strictEqual(published.length, 1);
  assert.strictEqual(published[0].id, '1');
});

test('should search posts by keyword', () => {
  const system = new BlogSystem();
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  
  const post1 = new Post('1', 'JavaScript Basics', 'Learn JS', author);
  const post2 = new Post('2', 'Python Guide', 'Learn Python', author);
  
  post1.publish();
  post2.publish();
  
  system.addPost(post1);
  system.addPost(post2);
  
  const results = system.searchPosts('javascript');
  assert.strictEqual(results.length, 1);
  assert.strictEqual(results[0].id, '1');
});

test('should filter posts by category', () => {
  const system = new BlogSystem();
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const jsCategory = new Category('1', 'JavaScript');
  const pyCategory = new Category('2', 'Python');
  
  const post1 = new Post('1', 'JS Post', 'Content', author, [jsCategory]);
  const post2 = new Post('2', 'Py Post', 'Content', author, [pyCategory]);
  
  post1.publish();
  post2.publish();
  
  system.addPost(post1);
  system.addPost(post2);
  
  const results = system.filterByCategory('javascript');
  assert.strictEqual(results.length, 1);
  assert.strictEqual(results[0].id, '1');
});

test('should filter posts by tag', () => {
  const system = new BlogSystem();
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  const beginnerTag = new Tag('beginner');
  const advancedTag = new Tag('advanced');
  
  const post1 = new Post('1', 'Easy Post', 'Content', author, [], [beginnerTag]);
  const post2 = new Post('2', 'Hard Post', 'Content', author, [], [advancedTag]);
  
  post1.publish();
  post2.publish();
  
  system.addPost(post1);
  system.addPost(post2);
  
  const results = system.filterByTag('beginner');
  assert.strictEqual(results.length, 1);
  assert.strictEqual(results[0].id, '1');
});

test('should get popular posts', () => {
  const system = new BlogSystem();
  const author = new User('1', 'author1', 'author@test.com', 'Author', 'author');
  
  const post1 = new Post('1', 'Post 1', 'Content', author);
  const post2 = new Post('2', 'Post 2', 'Content', author);
  
  post1.views = 100;
  post2.views = 50;
  
  post1.publish();
  post2.publish();
  
  system.addPost(post1);
  system.addPost(post2);
  
  const popular = system.getPopularPosts(1);
  assert.strictEqual(popular.length, 1);
  assert.strictEqual(popular[0].id, '1');
});

test('should prevent duplicate categories', () => {
  const system = new BlogSystem();
  const cat1 = new Category('1', 'JavaScript');
  const cat2 = new Category('2', 'JavaScript');
  
  system.addCategory(cat1);
  
  assert.throws(() => {
    system.addCategory(cat2);
  }, Error);
});

test('should prevent duplicate users', () => {
  const system = new BlogSystem();
  const user1 = new User('1', 'john', 'john@test.com', 'John');
  const user2 = new User('2', 'john', 'john2@test.com', 'John');
  
  system.addUser(user1);
  
  assert.throws(() => {
    system.addUser(user2);
  }, Error);
});

console.log('\n✅ All blog system tests passed!');
```

</details>

---

**Next Project**: [Project 06 - Social Media Feed](../project-06-social-media-feed/) 📱
