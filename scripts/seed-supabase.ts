/**
 * Database seed script for magazine platform
 * Populates initial data for testing and development
 * 
 * Usage: npx ts-node scripts/seed-supabase.ts
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const seedData = {
  authors: [
    {
      name: 'Sarah Johnson',
      slug: 'sarah-johnson',
      bio: 'Senior technology writer with 10+ years covering web development and design.',
      avatar: '/authors/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      slug: 'michael-chen',
      bio: 'Full-stack developer and open-source contributor focusing on modern web technologies.',
      avatar: '/authors/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      slug: 'emily-rodriguez',
      bio: 'UX designer and accessibility advocate creating inclusive digital experiences.',
      avatar: '/authors/emily-rodriguez.jpg'
    }
  ],
  categories: [
    {
      name: 'Technology',
      slug: 'technology',
      description: 'Latest trends in software, hardware, and digital innovation.',
      icon: '💻'
    },
    {
      name: 'Design',
      slug: 'design',
      description: 'UI/UX design principles, trends, and best practices.',
      icon: '🎨'
    },
    {
      name: 'Development',
      slug: 'development',
      description: 'Programming tutorials, frameworks, and development tools.',
      icon: '⚙️'
    },
    {
      name: 'Business',
      slug: 'business',
      description: 'Startup advice, entrepreneurship, and business strategy.',
      icon: '📊'
    }
  ],
  articles: [
    {
      title: 'Getting Started with Astro: The Full-Stack Framework',
      slug: 'getting-started-with-astro',
      excerpt: 'Learn how to build fast, content-rich websites with Astro\'s unique islands architecture.',
      content: '# Getting Started with Astro\n\nAstro is a modern web framework...',
      image: '/articles/astro-guide.jpg',
      read_time: 8,
      status: 'published',
      views: 1250
    },
    {
      title: 'Mastering Tailwind CSS: Advanced Patterns',
      slug: 'mastering-tailwind-css',
      excerpt: 'Discover advanced Tailwind CSS patterns for building complex UIs efficiently.',
      content: '# Mastering Tailwind CSS\n\nTailwind CSS has revolutionized...',
      image: '/articles/tailwind-advanced.jpg',
      read_time: 12,
      status: 'published',
      views: 980
    },
    {
      title: 'Supabase: The Open-Source Firebase Alternative',
      slug: 'supabase-open-source-alternative',
      excerpt: 'Why Supabase is becoming the go-to backend solution for modern web applications.',
      content: '# Supabase: The Open-Source Firebase Alternative\n\nSupabase...',
      image: '/articles/supabase-guide.jpg',
      read_time: 10,
      status: 'published',
      views: 1500
    }
  ]
};

async function seedDatabase() {
  console.log('🌱 Starting database seed...');

  // Seed authors
  console.log('📝 Seeding authors...');
  for (const author of seedData.authors) {
    const { error } = await supabase
      .from('authors')
      .upsert({ ...author, article_count: 0 }, { onConflict: 'slug' });
    if (error) console.error('Error seeding author:', error);
  }
  console.log('✅ Authors seeded successfully');

  // Seed categories
  console.log('📝 Seeding categories...');
  for (const category of seedData.categories) {
    const { error } = await supabase
      .from('categories')
      .upsert({ ...category, article_count: 0 }, { onConflict: 'slug' });
    if (error) console.error('Error seeding category:', error);
  }
  console.log('✅ Categories seeded successfully');

  // Seed articles
  console.log('📝 Seeding articles...');
  for (const article of seedData.articles) {
    const { error } = await supabase
      .from('articles')
      .upsert({ ...article }, { onConflict: 'slug' });
    if (error) console.error('Error seeding article:', error);
  }
  console.log('✅ Articles seeded successfully');

  console.log('🎉 Database seeding complete!');
}

seedDatabase().catch(console.error);
