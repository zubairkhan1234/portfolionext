'use client'
import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";

// TODO: Replace with real blog data
const blogPosts = [
  {
    title: "Building Modern React Applications with TypeScript",
    excerpt: "Learn how to leverage TypeScript's powerful type system to build more reliable and maintainable React applications with better developer experience.",
    category: "React",
    readTime: "8 min read",
    publishDate: "Jan 15, 2024",
    authorAvatar: '/images/Professional_developer_headshot_76b15bb7.png',
    authorName: "Muhammad Zubair"
  },
  {
    title: "Mastering CSS Grid and Flexbox Layout",
    excerpt: "A comprehensive guide to modern CSS layout techniques, comparing Grid and Flexbox, and when to use each for responsive web design.",
    category: "CSS",
    readTime: "12 min read", 
    publishDate: "Jan 10, 2024",
    authorAvatar: '/images/Professional_developer_headshot_76b15bb7.png',
    authorName: "Muhammad Zubair"
  },
  {
    title: "Node.js Performance Optimization Techniques",
    excerpt: "Discover proven strategies to optimize your Node.js applications for better performance, including memory management and async patterns.",
    category: "Node.js",
    readTime: "15 min read",
    publishDate: "Jan 5, 2024",
    authorAvatar: '/images/Professional_developer_headshot_76b15bb7.png',
    authorName: "Muhammad Zubair"
  },
  {
    title: "Introduction to GraphQL with Apollo",
    excerpt: "Get started with GraphQL and Apollo Client to build efficient APIs and client applications with type-safe data fetching.",
    category: "GraphQL",
    readTime: "10 min read",
    publishDate: "Dec 28, 2023",
    authorAvatar: '/images/Professional_developer_headshot_76b15bb7.png',
    authorName: "Muhammad Zubair"
  },
  {
    title: "Docker Containerization for Web Apps",
    excerpt: "Learn how to containerize your web applications with Docker for consistent development environments and simplified deployment.",
    category: "DevOps",
    readTime: "14 min read",
    publishDate: "Dec 20, 2023",
    authorAvatar: '/images/Professional_developer_headshot_76b15bb7.png',
    authorName: "Muhammad Zubair"
  },
  {
    title: "State Management with Zustand",
    excerpt: "Explore Zustand as a lightweight alternative to Redux for state management in React applications with minimal boilerplate.",
    category: "React",
    readTime: "7 min read",
    publishDate: "Dec 15, 2023",
    authorAvatar: '/images/Professional_developer_headshot_76b15bb7.png',
    authorName: "Muhammad Zubair"
  }
];

export default function Blogs() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4" data-testid="text-blogs-title">
            Blog Posts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-blogs-subtitle">
            Thoughts, tutorials, and insights about web development, technology, and software engineering.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              index={index}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              readTime={post.readTime}
              publishDate={post.publishDate}
              authorAvatar={post.authorAvatar}
              authorName={post.authorName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}