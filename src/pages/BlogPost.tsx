import { Link, useParams, Navigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogs } from "@/lib/blogs";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return <Navigate to="/blogs" replace />;

  return (
    <PageLayout>
      <Seo
        title={`${post.title} | Trushna Disinfecting Services`}
        description={post.excerpt}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          ...(post.image ? { image: `${window.location.origin}${post.image}` } : {}),
          author: { "@type": "Organization", name: "Trushna Disinfecting Services" },
          publisher: { "@type": "Organization", name: "Trushna Disinfecting Services" },
        }}
      />
      <article className="container max-w-3xl py-16">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to all articles
        </Link>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent inline-block mb-4">{post.category}</span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary leading-tight">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground mt-4 mb-10">
          <Calendar className="h-4 w-4" /> {post.date} · {post.read} read
        </div>
        <div className="aspect-[16/8] rounded-2xl gradient-accent mb-10 relative overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_60%)]" />
          )}
        </div>
        <div className="prose prose-lg max-w-none space-y-5 text-foreground/90 leading-relaxed">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-12 p-6 rounded-2xl gradient-card border border-border flex flex-wrap items-center justify-between gap-4">
          <p className="font-semibold text-primary">Ready to protect your space?</p>
          <Button asChild variant="hero"><Link to="/quote">Get Free Quote & Site Visit</Link></Button>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPost;