'use client'
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard from "./BlogCard";
// import profileImage from "@assets/generated_images/Professional_developer_headshot_76b15bb7.png";

// TODO: Replace with real blog data - latest posts only
const latestPosts = [
  {
    title: "Building Modern React Applications with TypeScript",
    excerpt: "Learn how to leverage TypeScript's powerful type system to build more reliable and maintainable React applications with better developer experience.",
    category: "React",
    readTime: "8 min read",
    publishDate: "Jan 15, 2024",
    authorAvatar: '/images/Professional_developer_headshot_76b15bb7.png',
    authorName: "John Developer"
  },
  {
    title: "Mastering CSS Grid and Flexbox Layout",
    excerpt: "A comprehensive guide to modern CSS layout techniques, comparing Grid and Flexbox, and when to use each for responsive web design.",
    category: "CSS",
    readTime: "12 min read", 
    publishDate: "Jan 10, 2024",
    authorAvatar: '/images/Professional_developer_headshot_76b15bb7.png',
    authorName: "John Developer"
  }
];

export default function BlogsPreview() {
  return (
    <section id="blogs-section" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-blogs-preview-title">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-blogs-preview-subtitle">
            Thoughts, tutorials, and insights about web development and technology
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {latestPosts.map((post, index) => (
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blogs">
            <Button size="lg" data-testid="button-blogs-preview-view-all">
              Read All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}