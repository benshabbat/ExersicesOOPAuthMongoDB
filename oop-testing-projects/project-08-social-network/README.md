# Project 08 - Social Network Platform 📱

## 🎯 Project Goal

Build a comprehensive social networking platform with user profiles, posts, comments, likes, friendships, messaging, notifications, and content feeds. This capstone project combines all OOP concepts learned in previous projects into one complex system.

## 📖 Project Description

Create a social network where users can create profiles, connect with friends, share posts, interact with content, send messages, receive notifications, and view personalized feeds with comprehensive testing of all features.

## 🎭 User Stories

As a user, I want to:
- ✅ Create and customize my profile
- ✅ Send and accept friend requests
- ✅ Create posts with text, images, and hashtags
- ✅ Like and comment on posts
- ✅ Share posts to my timeline
- ✅ Send direct messages to friends
- ✅ Receive notifications for interactions
- ✅ View a personalized feed
- ✅ Search for users and content
- ✅ Block/unblock users
- ✅ Report inappropriate content

## 📋 Requirements

### User Class

**Properties:**
- `id` - Unique user identifier
- `username` - Username (unique)
- `email` - Email address
- `#password` (private) - Hashed password
- `displayName` - Display name
- `bio` - User biography
- `avatarUrl` - Profile picture URL
- `coverUrl` - Cover photo URL
- `#friends` (private) - Friend list
- `#friendRequests` (private) - Pending friend requests
- `#blockedUsers` (private) - Blocked user IDs
- `#posts` (private) - User's posts
- `#savedPosts` (private) - Saved posts
- `createdAt` - Account creation date
- `isOnline` - Online status
- `lastSeenAt` - Last activity timestamp

**Methods:**
- `constructor(id, username, email, password, displayName)`
- `updateProfile(updates)` - Update profile information
- `sendFriendRequest(user)` - Send friend request
- `acceptFriendRequest(user)` - Accept request
- `rejectFriendRequest(user)` - Reject request
- `removeFriend(userId)` - Remove friend
- `blockUser(userId)` - Block user
- `unblockUser(userId)` - Unblock user
- `isFriendWith(userId)` - Check friendship
- `isBlocked(userId)` - Check if user is blocked
- `getFriends()` - Get friend list
- `getFriendRequests()` - Get pending requests
- `createPost(content, media, hashtags)` - Create new post
- `deletePost(postId)` - Delete own post
- `savePost(post)` - Save post for later
- `unsavePost(postId)` - Remove from saved
- `getSavedPosts()` - Get saved posts
- `getPublicProfile()` - Get public profile data

### Post Class

**Properties:**
- `id` - Unique post identifier
- `author` - User who created post
- `content` - Post text content
- `media` - Array of media URLs
- `hashtags` - Array of hashtags
- `#likes` (private) - Set of user IDs who liked
- `#comments` (private) - Array of comments
- `#shares` (private) - Array of shares
- `visibility` - 'public', 'friends', 'private'
- `createdAt` - Post creation date
- `updatedAt` - Last edit date
- `isEdited` - Whether post was edited

**Methods:**
- `constructor(id, author, content, media, hashtags, visibility)`
- `edit(newContent, newHashtags)` - Edit post
- `like(user)` - Add like
- `unlike(user)` - Remove like
- `isLikedBy(userId)` - Check if user liked
- `getLikeCount()` - Get total likes
- `addComment(comment)` - Add comment
- `removeComment(commentId)` - Remove comment
- `getComments()` - Get all comments
- `getCommentCount()` - Get total comments
- `share(user)` - Share post
- `getShareCount()` - Get total shares
- `getEngagement()` - Calculate engagement score
- `hasHashtag(tag)` - Check if post has hashtag
- `canBeViewedBy(user)` - Check visibility permissions

### Comment Class

**Properties:**
- `id` - Unique comment identifier
- `post` - Post being commented on
- `author` - Comment author
- `content` - Comment text
- `#likes` (private) - Set of user IDs who liked
- `#replies` (private) - Array of reply comments
- `parentComment` - Parent comment (if reply)
- `createdAt` - Comment creation date
- `isEdited` - Whether comment was edited

**Methods:**
- `constructor(id, post, author, content, parentComment)`
- `edit(newContent)` - Edit comment
- `like(user)` - Like comment
- `unlike(user)` - Unlike comment
- `getLikeCount()` - Get total likes
- `addReply(reply)` - Add reply
- `getReplies()` - Get all replies
- `isReply()` - Check if is a reply

### Message Class

**Properties:**
- `id` - Unique message identifier
- `sender` - User who sent message
- `recipient` - User who receives message
- `content` - Message text
- `mediaUrl` - Optional media attachment
- `isRead` - Whether message was read
- `readAt` - When message was read
- `sentAt` - When message was sent

**Methods:**
- `constructor(id, sender, recipient, content, mediaUrl)`
- `markAsRead()` - Mark message as read
- `isReadBy(userId)` - Check if user read message

### Notification Class

**Properties:**
- `id` - Unique notification identifier
- `recipient` - User receiving notification
- `type` - Notification type
- `actor` - User who triggered notification
- `relatedPost` - Related post (if applicable)
- `relatedComment` - Related comment (if applicable)
- `message` - Notification message
- `isRead` - Whether notification was read
- `createdAt` - Notification creation date

**Methods:**
- `constructor(id, recipient, type, actor, message, relatedPost, relatedComment)`
- `markAsRead()` - Mark as read
- `getDisplayText()` - Get formatted notification text

### SocialNetwork Class (Main System)

**Properties:**
- `#users` (private) - All registered users
- `#posts` (private) - All posts
- `#messages` (private) - All messages
- `#notifications` (private) - All notifications
- `#reportedContent` (private) - Reported content

**Methods:**
- `registerUser(username, email, password, displayName)` - Create new user
- `login(email, password)` - Authenticate user
- `getUser(userId)` - Get user by ID
- `findUserByUsername(username)` - Search user
- `createPost(userId, content, media, hashtags, visibility)` - Create post
- `getPost(postId)` - Get post by ID
- `deletePost(postId, userId)` - Delete post (author or admin)
- `sendMessage(senderId, recipientId, content, mediaUrl)` - Send message
- `getConversation(user1Id, user2Id)` - Get messages between users
- `createNotification(recipientId, type, actorId, message, postId, commentId)` - Create notification
- `getUserNotifications(userId)` - Get user's notifications
- `getFeed(userId, limit)` - Get personalized feed
- `searchPosts(query)` - Search posts by keyword
- `searchPostsByHashtag(hashtag)` - Search by hashtag
- `getTrendingHashtags(limit)` - Get popular hashtags
- `reportContent(reporterId, contentId, contentType, reason)` - Report content
- `getReportedContent()` - Get all reports (admin)

## 🧪 Testing Requirements

Write comprehensive tests for:
- ✅ User registration and login
- ✅ Profile updates
- ✅ Friend request system (send, accept, reject)
- ✅ Friendship management
- ✅ User blocking
- ✅ Post creation and editing
- ✅ Post visibility permissions
- ✅ Like/unlike posts and comments
- ✅ Comment creation and replies
- ✅ Post sharing
- ✅ Message sending and reading
- ✅ Conversation retrieval
- ✅ Notification creation and delivery
- ✅ Feed generation
- ✅ Search functionality
- ✅ Hashtag tracking
- ✅ Content reporting
- ✅ Edge cases (blocked users, deleted content, privacy)

## 🎯 Hints

<details>
<summary>💡 Hint 1: User Authentication and Profiles</summary>

```javascript
class User {
  #password;
  #friends = new Set();
  #friendRequests = new Set();
  #blockedUsers = new Set();
  #posts = [];
  #savedPosts = [];

  constructor(id, username, email, password, displayName) {
    if (!username || !email || !password) {
      throw new Error('Username, email, and password required');
    }
    if (!this.#isValidEmail(email)) {
      throw new Error('Invalid email format');
    }
    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }

    this.id = id;
    this.username = username;
    this.email = email;
    this.#password = this.#hashPassword(password);
    this.displayName = displayName || username;
    this.bio = '';
    this.avatarUrl = '';
    this.coverUrl = '';
    this.createdAt = new Date();
    this.isOnline = false;
    this.lastSeenAt = new Date();
  }

  #isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  #hashPassword(password) {
    // Simple hash for demo (use bcrypt in production!)
    return Buffer.from(password).toString('base64');
  }

  verifyPassword(password) {
    return this.#hashPassword(password) === this.#password;
  }

  updateProfile(updates) {
    const allowedFields = ['displayName', 'bio', 'avatarUrl', 'coverUrl'];
    
    for (const [key, value] of Object.entries(updates)) {
      if (allowedFields.includes(key)) {
        this[key] = value;
      }
    }
  }

  getPublicProfile() {
    return {
      id: this.id,
      username: this.username,
      displayName: this.displayName,
      bio: this.bio,
      avatarUrl: this.avatarUrl,
      coverUrl: this.coverUrl,
      friendCount: this.#friends.size,
      postCount: this.#posts.length,
      createdAt: this.createdAt,
      isOnline: this.isOnline,
      lastSeenAt: this.lastSeenAt
    };
  }
}
```

Key concepts:
- Private password storage
- Email validation
- Public vs private data
- Password verification
</details>

<details>
<summary>💡 Hint 2: Friend Request System</summary>

```javascript
// In User class
sendFriendRequest(user) {
  if (user.id === this.id) {
    throw new Error('Cannot send friend request to yourself');
  }

  if (this.isFriendWith(user.id)) {
    throw new Error('Already friends with this user');
  }

  if (user.isBlocked(this.id) || this.isBlocked(user.id)) {
    throw new Error('Cannot send friend request to blocked user');
  }

  if (user.#friendRequests.has(this.id)) {
    throw new Error('Friend request already sent');
  }

  user.#friendRequests.add(this.id);
}

acceptFriendRequest(user) {
  if (!this.#friendRequests.has(user.id)) {
    throw new Error('No friend request from this user');
  }

  this.#friendRequests.delete(user.id);
  this.#friends.add(user.id);
  user.#friends.add(this.id);
}

rejectFriendRequest(user) {
  if (!this.#friendRequests.has(user.id)) {
    throw new Error('No friend request from this user');
  }

  this.#friendRequests.delete(user.id);
}

removeFriend(userId) {
  if (!this.isFriendWith(userId)) {
    throw new Error('Not friends with this user');
  }

  this.#friends.delete(userId);
  // Note: Would need to remove from other user's friends too in full implementation
}

isFriendWith(userId) {
  return this.#friends.has(userId);
}

getFriends() {
  return Array.from(this.#friends);
}

getFriendRequests() {
  return Array.from(this.#friendRequests);
}
```

Friend system:
- Mutual friendship (both users must have each other)
- Request validation
- Block checking
- No self-friending
</details>

<details>
<summary>💡 Hint 3: Post with Visibility and Engagement</summary>

```javascript
class Post {
  #likes = new Set();
  #comments = [];
  #shares = [];

  constructor(id, author, content, media = [], hashtags = [], visibility = 'public') {
    if (!id || !author || !content) {
      throw new Error('ID, author, and content required');
    }

    const validVisibility = ['public', 'friends', 'private'];
    if (!validVisibility.includes(visibility)) {
      throw new Error('Invalid visibility setting');
    }

    this.id = id;
    this.author = author;
    this.content = content.trim();
    this.media = media;
    this.hashtags = this.#extractHashtags(content, hashtags);
    this.visibility = visibility;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.isEdited = false;
  }

  #extractHashtags(content, additionalTags = []) {
    const regex = /#(\w+)/g;
    const foundTags = [];
    let match;

    while ((match = regex.exec(content)) !== null) {
      foundTags.push(match[1].toLowerCase());
    }

    return [...new Set([...foundTags, ...additionalTags.map(t => t.toLowerCase())])];
  }

  edit(newContent, newHashtags = []) {
    this.content = newContent.trim();
    this.hashtags = this.#extractHashtags(newContent, newHashtags);
    this.updatedAt = new Date();
    this.isEdited = true;
  }

  like(user) {
    if (this.#likes.has(user.id)) {
      throw new Error('Post already liked by this user');
    }
    this.#likes.add(user.id);
  }

  unlike(user) {
    if (!this.#likes.has(user.id)) {
      throw new Error('Post not liked by this user');
    }
    this.#likes.delete(user.id);
  }

  isLikedBy(userId) {
    return this.#likes.has(userId);
  }

  getLikeCount() {
    return this.#likes.size;
  }

  addComment(comment) {
    if (comment.post.id !== this.id) {
      throw new Error('Comment does not belong to this post');
    }
    this.#comments.push(comment);
  }

  getCommentCount() {
    return this.#comments.length;
  }

  getEngagement() {
    // Engagement score: likes + (comments * 2) + (shares * 3)
    return this.getLikeCount() + 
           (this.getCommentCount() * 2) + 
           (this.getShareCount() * 3);
  }

  canBeViewedBy(user) {
    // Private posts only viewable by author
    if (this.visibility === 'private') {
      return user.id === this.author.id;
    }

    // Friends-only posts viewable by author and friends
    if (this.visibility === 'friends') {
      return user.id === this.author.id || 
             this.author.isFriendWith(user.id);
    }

    // Public posts viewable by anyone (except blocked users)
    return !this.author.isBlocked(user.id);
  }

  hasHashtag(tag) {
    return this.hashtags.includes(tag.toLowerCase());
  }
}
```

Post features:
- Automatic hashtag extraction
- Visibility control
- Engagement scoring
- Permission checking
</details>

<details>
<summary>💡 Hint 4: Comments with Nested Replies</summary>

```javascript
class Comment {
  #likes = new Set();
  #replies = [];

  constructor(id, post, author, content, parentComment = null) {
    if (!id || !post || !author || !content) {
      throw new Error('All fields required');
    }

    this.id = id;
    this.post = post;
    this.author = author;
    this.content = content.trim();
    this.parentComment = parentComment;
    this.createdAt = new Date();
    this.isEdited = false;

    // Add to parent if this is a reply
    if (parentComment) {
      if (!(parentComment instanceof Comment)) {
        throw new Error('Parent must be a Comment instance');
      }
      parentComment.addReply(this);
    }
  }

  edit(newContent) {
    if (!newContent || newContent.trim().length === 0) {
      throw new Error('Comment content cannot be empty');
    }
    this.content = newContent.trim();
    this.isEdited = true;
  }

  like(user) {
    if (this.#likes.has(user.id)) {
      throw new Error('Comment already liked');
    }
    this.#likes.add(user.id);
  }

  unlike(user) {
    if (!this.#likes.has(user.id)) {
      throw new Error('Comment not liked');
    }
    this.#likes.delete(user.id);
  }

  getLikeCount() {
    return this.#likes.size;
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

  getTotalRepliesCount() {
    let count = this.#replies.length;
    for (const reply of this.#replies) {
      count += reply.getTotalRepliesCount();
    }
    return count;
  }
}
```

Comment system:
- Nested replies
- Like tracking
- Edit tracking
- Recursive reply counting
</details>

<details>
<summary>💡 Hint 5: Messaging System</summary>

```javascript
class Message {
  constructor(id, sender, recipient, content, mediaUrl = null) {
    if (!id || !sender || !recipient || !content) {
      throw new Error('All fields required');
    }

    if (sender.id === recipient.id) {
      throw new Error('Cannot send message to yourself');
    }

    this.id = id;
    this.sender = sender;
    this.recipient = recipient;
    this.content = content.trim();
    this.mediaUrl = mediaUrl;
    this.isRead = false;
    this.readAt = null;
    this.sentAt = new Date();
  }

  markAsRead() {
    if (!this.isRead) {
      this.isRead = true;
      this.readAt = new Date();
    }
  }

  isReadBy(userId) {
    return this.isRead && userId === this.recipient.id;
  }
}

// In SocialNetwork class
sendMessage(senderId, recipientId, content, mediaUrl = null) {
  const sender = this.getUser(senderId);
  const recipient = this.getUser(recipientId);

  // Check if users are blocked
  if (sender.isBlocked(recipientId) || recipient.isBlocked(senderId)) {
    throw new Error('Cannot send message to blocked user');
  }

  // Check if users are friends (optional restriction)
  if (!sender.isFriendWith(recipientId)) {
    throw new Error('Can only message friends');
  }

  const message = new Message(
    `msg_${Date.now()}_${Math.random()}`,
    sender,
    recipient,
    content,
    mediaUrl
  );

  this.#messages.push(message);

  // Create notification
  this.createNotification(
    recipientId,
    'message',
    senderId,
    `${sender.displayName} sent you a message`,
    null,
    null
  );

  return message;
}

getConversation(user1Id, user2Id) {
  return this.#messages
    .filter(msg => 
      (msg.sender.id === user1Id && msg.recipient.id === user2Id) ||
      (msg.sender.id === user2Id && msg.recipient.id === user1Id)
    )
    .sort((a, b) => a.sentAt - b.sentAt);
}
```

Messaging:
- Private conversations
- Read status tracking
- Friend-only messaging
- Notification integration
</details>

<details>
<summary>💡 Hint 6: Personalized Feed Algorithm</summary>

```javascript
// In SocialNetwork class
getFeed(userId, limit = 20) {
  const user = this.getUser(userId);
  const friends = user.getFriends();

  // Get all visible posts
  const visiblePosts = this.#posts.filter(post => {
    // Don't show user's own posts in feed
    if (post.author.id === userId) {
      return false;
    }

    // Check visibility permissions
    if (!post.canBeViewedBy(user)) {
      return false;
    }

    // Show posts from friends and public posts
    return post.visibility === 'public' || 
           friends.includes(post.author.id);
  });

  // Score and sort posts
  const scoredPosts = visiblePosts.map(post => {
    let score = 0;

    // Recency score (posts from last 24 hours get boost)
    const hoursSincePost = (Date.now() - post.createdAt) / (1000 * 60 * 60);
    if (hoursSincePost < 24) {
      score += 100 * (1 - hoursSincePost / 24);
    }

    // Engagement score
    score += post.getEngagement() * 10;

    // Friend boost (posts from friends score higher)
    if (friends.includes(post.author.id)) {
      score += 50;
    }

    return { post, score };
  });

  // Sort by score and return top posts
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}

searchPosts(query) {
  const lowerQuery = query.toLowerCase().trim();

  return this.#posts.filter(post => {
    if (post.visibility === 'private') {
      return false;
    }

    return post.content.toLowerCase().includes(lowerQuery) ||
           post.hashtags.some(tag => tag.includes(lowerQuery));
  });
}

getTrendingHashtags(limit = 10) {
  const hashtagCounts = new Map();

  // Count hashtags from recent posts (last 7 days)
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  for (const post of this.#posts) {
    if (post.createdAt >= sevenDaysAgo && post.visibility === 'public') {
      for (const tag of post.hashtags) {
        hashtagCounts.set(tag, (hashtagCounts.get(tag) || 0) + 1);
      }
    }
  }

  // Sort by count and return top hashtags
  return Array.from(hashtagCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag, count]) => ({ tag, count }));
}
```

Feed algorithm factors:
- Recency (newer posts prioritized)
- Engagement (likes, comments, shares)
- Friend connections
- Visibility permissions
</details>

<details>
<summary>⚠️ Hint 7: Common Pitfalls</summary>

Watch out for:
- ❌ Not checking friendship before allowing interactions
- ❌ Exposing private data in public profiles
- ❌ Not validating permissions for post viewing
- ❌ Allowing self-friending or self-messaging
- ❌ Memory leaks from circular references
- ❌ Not handling blocked users properly
- ❌ Race conditions in concurrent likes/unlikes
- ❌ Not sanitizing user input (XSS vulnerabilities)
- ❌ Inefficient feed algorithms (O(n²) searches)
- ❌ Not handling deleted users gracefully
- ❌ Exposing password hashes
- ❌ Not validating email uniqueness
</details>

## 🏆 Bonus Challenges

1. **Stories Feature** ⭐⭐
   - 24-hour ephemeral posts
   - View tracking
   - Story highlights

2. **Groups/Communities** ⭐⭐⭐
   - Group creation
   - Member management
   - Group posts

3. **Live Chat** ⭐⭐⭐
   - Real-time messaging
   - Typing indicators
   - Online status

4. **Photo Albums** ⭐⭐
   - Organize photos
   - Album sharing
   - Tagging

5. **Events** ⭐⭐
   - Create events
   - RSVP system
   - Reminders

6. **Recommendation Engine** ⭐⭐⭐⭐
   - Friend suggestions
   - Content recommendations
   - Machine learning integration

7. **Analytics Dashboard** ⭐⭐⭐
   - User engagement metrics
   - Growth tracking
   - Content performance

## ✅ Completion Checklist

- [ ] All 6 classes implemented
- [ ] User registration and authentication
- [ ] Profile management
- [ ] Friend request system
- [ ] Post creation with visibility
- [ ] Like/comment system
- [ ] Nested comment replies
- [ ] Messaging system
- [ ] Notification system
- [ ] Personalized feed
- [ ] Search functionality
- [ ] Hashtag tracking
- [ ] Content reporting
- [ ] User blocking
- [ ] 70+ comprehensive tests
- [ ] All edge cases handled
- [ ] Privacy controls working

---

## 🔐 Complete Solution

<details>
<summary>🎯 Click to reveal complete solution (Try solving it yourself first!)</summary>

The complete solution includes all classes with full implementations, 70+ comprehensive tests covering all features, and production-ready code patterns.

Key implementations provided:
- User authentication with password hashing
- Complete friend request system
- Post visibility and permissions
- Nested comment system
- Messaging with read receipts
- Notification system
- Feed algorithm with scoring
- Search and hashtag tracking
- Content moderation
- Privacy controls

See individual class files for complete implementations.

</details>

---

## 🎓 Congratulations!

You've completed all 8 OOP + Testing projects! You now have comprehensive experience with:

✅ Object-Oriented Programming principles  
✅ Test-Driven Development  
✅ Complex system design  
✅ State management  
✅ Data relationships  
✅ Permission systems  
✅ Real-world application patterns

**Keep building and learning!** 🚀
