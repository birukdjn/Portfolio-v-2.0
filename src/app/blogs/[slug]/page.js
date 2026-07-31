"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  GitCommit,
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Check,
  BookOpen
} from "lucide-react";
import blogs from "../../../Data/blogsData";

export default function BlogDetailPage({ params }) {
  const resolvedParams = use(params);
  const slugParam = resolvedParams.slug;
  const [copied, setCopied] = useState(false);

  // Match by id, slug, or title slug
  const blog = blogs.find(
    (b) =>
      b.id === slugParam ||
      b.slug === slugParam ||
      b.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "") === slugParam
  ) || blogs[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <main className="relative py-24 sm:py-28 bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-float-medium delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-8">
        {/* Back Link */}
        <Link
          href="/blogs"
          className="inline-flex items-center space-x-2 text-xs font-mono text-indigo-400 hover:text-indigo-300 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* Header Metadata */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-md">
              {blog.category}
            </span>
            <span className="text-xs font-mono text-slate-300 flex items-center space-x-1 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>{blog.readTime} min read</span>
            </span>
            <span className="text-xs font-mono text-slate-300 flex items-center space-x-1 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              <span>{blog.date}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            {blog.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            {blog.excerpt}
          </p>

          {/* Author info & share */}
          <div className="flex items-center justify-between py-4 border-y border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-sm">
                BD
              </div>
              <div>
                <div className="text-sm font-bold text-white">Biruk Dejene</div>
                <div className="text-xs text-slate-400 font-mono">Software Engineer @ Arifpay</div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors border border-slate-800 flex items-center space-x-1.5 text-xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? "Link Copied!" : "Share Article"}</span>
            </button>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover w-full h-full"
            priority
            unoptimized
          />
        </div>

        {/* Article Markdown Content */}
        <article className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="prose prose-invert max-w-none text-slate-200 text-sm sm:text-base leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: formatMarkdown(blog.content) }} />
          </div>
        </article>
      </div>
    </main>
  );
}

function formatMarkdown(content) {
  if (!content) return "";
  return content
    .replace(/^# (.*$)/gim, '<h1 class="text-xl sm:text-2xl font-black text-white mt-6 mb-3 pb-2 border-b border-slate-800">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-lg sm:text-xl font-bold text-indigo-300 mt-6 mb-2">$2</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-base font-bold text-slate-200 mt-4 mb-1">$3</h3>')
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-slate-950 border border-slate-800 p-4 rounded-xl font-mono text-xs overflow-x-auto text-emerald-300 my-4"><code>$1</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="bg-slate-950 text-indigo-300 px-1.5 py-0.5 rounded font-mono text-xs border border-slate-800">$1</code>')
    .replace(/^\- (.*$)/gim, '<li class="ml-4 list-disc text-slate-300 my-1">$1</li>')
    .replace(/\n\n/g, '<p class="my-3 text-slate-300 leading-relaxed"></p>');
}
