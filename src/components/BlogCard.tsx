import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  authorAvatar: string;
  authorName: string;
  index: number;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  readTime,
  publishDate,
  authorAvatar,
  authorName,
  index
}: BlogCardProps) {
  const handleReadMore = () => {
    console.log(`Read more clicked for ${title}`);
    // TODO: Navigate to full blog post
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full hover-elevate group">
        <CardContent className="p-6 flex flex-col justify-between h-full">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" data-testid={`badge-blog-category-${index}`}>
                {category}
              </Badge>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1" data-testid={`text-blog-date-${index}`}>
                  <Calendar className="h-3 w-3" />
                  {publishDate}
                </div>
                <div className="flex items-center gap-1" data-testid={`text-blog-readtime-${index}`}>
                  <Clock className="h-3 w-3" />
                  {readTime}
                </div>
              </div>
            </div>

            <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors" data-testid={`text-blog-title-${index}`}>
              {title}
            </h3>

            <p className="text-muted-foreground leading-relaxed" data-testid={`text-blog-excerpt-${index}`}>
              {excerpt}
            </p>
          </div>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-3">
              <Image
                src={authorAvatar}
                alt={authorName}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
                data-testid={`img-blog-avatar-${index}`}
              />
              <span className="text-sm text-muted-foreground" data-testid={`text-blog-author-${index}`}>
                {authorName}
              </span>
            </div>

            <Button 
              variant="ghost" 
              className="w-full justify-between group-hover:bg-primary/10 transition-colors"
              onClick={handleReadMore}
              data-testid={`button-blog-read-${index}`}
            >
              Read More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}